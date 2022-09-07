import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: "teal",
        defaultRadius: "lg",
      }}
    >
      <NotificationsProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
