import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default MainProvider;
