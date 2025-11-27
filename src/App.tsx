import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RileyDemo from "./pages/RileyDemo";
import Pricing from "./pages/Pricing";
import WhatsAppAutomation from "./pages/WhatsAppAutomation";
import EmailCRMAutomation from "./pages/EmailCRMAutomation";
import BookingSystems from "./pages/BookingSystems";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/riley-demo" element={<RileyDemo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/whatsapp" element={<WhatsAppAutomation />} />
          <Route path="/services/email-crm" element={<EmailCRMAutomation />} />
          <Route path="/services/booking" element={<BookingSystems />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
