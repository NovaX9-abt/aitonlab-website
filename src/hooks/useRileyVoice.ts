/**
 * Custom hook for Riley Voice Agent.
 * Manages WebSocket connection, audio recording/playback, and conversation state.
 */

import { useState, useRef, useCallback, useEffect } from "react";
import { AudioRecorder, AudioStreamer } from "@/lib/audio-utils";

export type RileyState =
  | "idle"
  | "connecting"
  | "listening"
  | "speaking"
  | "processing_tool"
  | "error"
  | "ended";

export interface Transcript {
  role: "user" | "agent";
  text: string;
  timestamp: number;
}

export interface ToolActivity {
  name: string;
  status: "executing" | "done";
}

const WS_URL = import.meta.env.VITE_RILEY_WS_URL || "ws://localhost:8000/ws";

export function useRileyVoice() {
  const [state, setState] = useState<RileyState>("idle");
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [toolActivity, setToolActivity] = useState<ToolActivity | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const recorderRef = useRef<AudioRecorder | null>(null);
  const streamerRef = useRef<AudioStreamer | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Accumulate partial transcripts before appending
  const pendingInputRef = useRef<string>("");
  const pendingOutputRef = useRef<string>("");

  const cleanup = useCallback(() => {
    // Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Stop recorder
    recorderRef.current?.stop();
    recorderRef.current = null;

    // Stop streamer
    streamerRef.current?.stop();
    streamerRef.current = null;

    // Close WebSocket
    if (wsRef.current) {
      try {
        wsRef.current.close();
      } catch {
        // ignore
      }
      wsRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  const startSession = useCallback(async () => {
    try {
      setError(null);
      setTranscripts([]);
      setElapsedSeconds(0);
      setState("connecting");
      pendingInputRef.current = "";
      pendingOutputRef.current = "";

      // Initialize audio streamer (must be in click handler for autoplay policy)
      const streamer = new AudioStreamer();
      streamer.init();
      streamerRef.current = streamer;

      // Initialize recorder
      const recorder = new AudioRecorder();
      recorderRef.current = recorder;

      // Connect WebSocket
      const ws = new WebSocket(WS_URL);
      wsRef.current = ws;

      ws.onopen = () => {
        // WebSocket connected, waiting for Gemini session
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);

          switch (msg.type) {
            case "status":
              setState("listening");
              // Start the recorder after connection is established
              recorder.onAudioChunk = (base64) => {
                if (ws.readyState === WebSocket.OPEN) {
                  ws.send(JSON.stringify({ type: "audio", data: base64 }));
                }
              };
              recorder.start().catch((err) => {
                setError("Microphone access denied. Please allow microphone access and try again.");
                setState("error");
              });

              // Start elapsed timer
              timerRef.current = setInterval(() => {
                setElapsedSeconds((prev) => prev + 1);
              }, 1000);
              break;

            case "audio":
              if (state !== "speaking") setState("speaking");
              streamer.enqueue(msg.data);
              break;

            case "input_transcript":
              // Accumulate user transcript
              pendingInputRef.current += msg.text;
              break;

            case "output_transcript":
              // Accumulate agent transcript
              pendingOutputRef.current += msg.text;
              break;

            case "turn_complete":
              // Flush any pending transcripts
              if (pendingOutputRef.current.trim()) {
                setTranscripts((prev) => [
                  ...prev,
                  { role: "agent", text: pendingOutputRef.current.trim(), timestamp: Date.now() },
                ]);
                pendingOutputRef.current = "";
              }
              if (pendingInputRef.current.trim()) {
                setTranscripts((prev) => [
                  ...prev,
                  { role: "user", text: pendingInputRef.current.trim(), timestamp: Date.now() },
                ]);
                pendingInputRef.current = "";
              }
              setState("listening");
              break;

            case "interrupted":
              // Barge-in: clear audio queue
              streamer.clearQueue();
              // Flush agent partial transcript
              if (pendingOutputRef.current.trim()) {
                setTranscripts((prev) => [
                  ...prev,
                  { role: "agent", text: pendingOutputRef.current.trim() + "...", timestamp: Date.now() },
                ]);
                pendingOutputRef.current = "";
              }
              setState("listening");
              break;

            case "tool_call":
              setToolActivity({ name: msg.name, status: "executing" });
              setState("processing_tool");
              break;

            case "tool_result":
              setToolActivity({ name: msg.name, status: "done" });
              // Reset tool activity after a brief display
              setTimeout(() => setToolActivity(null), 1500);
              break;

            case "error":
              setError(msg.message);
              setState("error");
              break;

            case "session_end":
              setState("ended");
              cleanup();
              break;
          }
        } catch {
          // Ignore malformed messages
        }
      };

      ws.onerror = () => {
        setError("Connection error. Please check your internet and try again.");
        setState("error");
        cleanup();
      };

      ws.onclose = () => {
        if (state !== "ended" && state !== "error" && state !== "idle") {
          setState("ended");
        }
        cleanup();
      };
    } catch (err: any) {
      setError(err.message || "Failed to start session");
      setState("error");
      cleanup();
    }
  }, [cleanup]);

  const endSession = useCallback(() => {
    // Flush remaining transcripts
    if (pendingInputRef.current.trim()) {
      setTranscripts((prev) => [
        ...prev,
        { role: "user", text: pendingInputRef.current.trim(), timestamp: Date.now() },
      ]);
      pendingInputRef.current = "";
    }
    if (pendingOutputRef.current.trim()) {
      setTranscripts((prev) => [
        ...prev,
        { role: "agent", text: pendingOutputRef.current.trim(), timestamp: Date.now() },
      ]);
      pendingOutputRef.current = "";
    }

    // Send end signal
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: "end_session" }));
    }

    setState("ended");
    cleanup();
  }, [cleanup]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      if (recorderRef.current) {
        recorderRef.current.muted = next;
      }
      return next;
    });
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }, []);

  return {
    state,
    transcripts,
    error,
    elapsedSeconds,
    formattedTime: formatTime(elapsedSeconds),
    isMuted,
    toolActivity,
    startSession,
    endSession,
    toggleMute,
  };
}
