import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
