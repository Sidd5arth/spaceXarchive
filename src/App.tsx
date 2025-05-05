import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "./App.scss";
import HomeButton from "./components/common/HomeButton";

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      <BrowserRouter>
        <HomeButton />
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
}
