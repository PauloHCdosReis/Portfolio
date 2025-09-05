import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        {children}
        <Toaster position="top-right" richColors visibleToasts={5} />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
