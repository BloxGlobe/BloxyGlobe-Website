import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Layout & Pages
import { DocsLayout } from "@/components/DocsLayout";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import DevTeam from "@/pages/DevTeam";
import FAQ from "@/pages/FAQ";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster position="top-right" />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<Home />} />

              {/* Main Docs / Info */}
              <Route path="/info" element={<DocsLayout />}>
                <Route index element={<AboutUs />} />
                <Route path="dev-team" element={<DevTeam />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="careers" element={<Careers />} />
                <Route path="contact" element={<Contact />} />
              </Route>

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
