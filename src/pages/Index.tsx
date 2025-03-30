
import { AuroraBackgroundDemo } from "@/components/ui/aurora-demo";
import { ThemeProvider } from "@/components/theme-provider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <AuroraBackgroundDemo />
    </ThemeProvider>
  );
};

export default Index;
