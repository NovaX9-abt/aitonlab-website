/**
 * Audio utilities for Riley Voice Agent.
 * Handles mic capture (16kHz PCM16) and audio playback (24kHz PCM16).
 */

// --- Mic Capture ---

export class AudioRecorder {
  private stream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private processor: ScriptProcessorNode | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private _isMuted = false;
  onAudioChunk: ((base64: string) => void) | null = null;

  async start(): Promise<void> {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        sampleRate: 16000,
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    this.audioContext = new AudioContext({ sampleRate: 16000 });
    this.source = this.audioContext.createMediaStreamSource(this.stream);

    // ScriptProcessorNode for broad compatibility (including Safari)
    this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);
    this.processor.onaudioprocess = (e) => {
      if (this._isMuted || !this.onAudioChunk) return;
      const float32 = e.inputBuffer.getChannelData(0);
      const int16 = float32ToInt16(float32);
      const base64 = arrayBufferToBase64(int16.buffer);
      this.onAudioChunk(base64);
    };

    this.source.connect(this.processor);
    this.processor.connect(this.audioContext.destination);
  }

  set muted(value: boolean) {
    this._isMuted = value;
  }

  get muted(): boolean {
    return this._isMuted;
  }

  stop(): void {
    this.processor?.disconnect();
    this.source?.disconnect();
    this.audioContext?.close();
    this.stream?.getTracks().forEach((t) => t.stop());
    this.processor = null;
    this.source = null;
    this.audioContext = null;
    this.stream = null;
  }
}

// --- Audio Playback ---

export class AudioStreamer {
  private audioContext: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private queue: AudioBuffer[] = [];
  private isPlaying = false;
  private nextStartTime = 0;
  private scheduledSources: AudioBufferSourceNode[] = [];

  /**
   * Must be called inside a user gesture (click handler) to satisfy autoplay policy.
   */
  init(): void {
    if (this.audioContext) return;
    this.audioContext = new AudioContext({ sampleRate: 24000 });
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
  }

  /**
   * Enqueue a base64-encoded PCM16 audio chunk for playback.
   */
  enqueue(base64Data: string): void {
    if (!this.audioContext || !this.gainNode) return;

    const bytes = base64ToArrayBuffer(base64Data);
    const int16 = new Int16Array(bytes);
    const float32 = int16ToFloat32(int16);

    const buffer = this.audioContext.createBuffer(1, float32.length, 24000);
    buffer.getChannelData(0).set(float32);

    this.queue.push(buffer);
    this.scheduleNext();
  }

  private scheduleNext(): void {
    if (!this.audioContext || !this.gainNode || this.queue.length === 0) return;

    const buffer = this.queue.shift()!;
    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.gainNode);

    const now = this.audioContext.currentTime;
    const startTime = Math.max(now, this.nextStartTime);
    source.start(startTime);
    this.nextStartTime = startTime + buffer.duration;

    this.scheduledSources.push(source);
    source.onended = () => {
      this.scheduledSources = this.scheduledSources.filter((s) => s !== source);
      if (this.queue.length > 0) {
        this.scheduleNext();
      }
    };

    this.isPlaying = true;
  }

  /**
   * Clear all queued and playing audio (for barge-in).
   */
  clearQueue(): void {
    this.queue = [];
    for (const source of this.scheduledSources) {
      try {
        source.stop();
      } catch {
        // Already stopped
      }
    }
    this.scheduledSources = [];
    this.nextStartTime = 0;
    this.isPlaying = false;

    // Reset gain node to clear any residual audio
    if (this.gainNode && this.audioContext) {
      this.gainNode.disconnect();
      this.gainNode = this.audioContext.createGain();
      this.gainNode.connect(this.audioContext.destination);
    }
  }

  stop(): void {
    this.clearQueue();
    this.audioContext?.close();
    this.audioContext = null;
    this.gainNode = null;
  }
}

// --- Encoding Helpers ---

function float32ToInt16(float32: Float32Array): Int16Array {
  const int16 = new Int16Array(float32.length);
  for (let i = 0; i < float32.length; i++) {
    const s = Math.max(-1, Math.min(1, float32[i]));
    int16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return int16;
}

function int16ToFloat32(int16: Int16Array): Float32Array {
  const float32 = new Float32Array(int16.length);
  for (let i = 0; i < int16.length; i++) {
    float32[i] = int16[i] / (int16[i] < 0 ? 0x8000 : 0x7fff);
  }
  return float32;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}
