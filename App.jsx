
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "./context/PortfolioContext";
import Index from "./pages/Index";
import PortfolioPage from "./pages/PortfolioPage";
import TradePage from "./pages/TradePage";
import WatchlistPage from "./pages/WatchlistPage";
import LearnPage from "./pages/LearnPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import UserListPage from "./pages/UserListPage";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PortfolioProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/trade" element={<TradePage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
