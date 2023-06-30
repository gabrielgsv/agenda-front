import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";
import ButtonTheme from "./components/ButtonTheme";
import { useAppSelector } from "./redux/hooks";
import Routes from "./routes";

function App() {
  const colorScheme = useAppSelector((state) => state.theme.colorScheme);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: colorScheme,
        primaryColor: "teal",
        defaultRadius: "lg",
        white: "#f1f1f1",
      }}
    >
      <NotificationsProvider>
        <BrowserRouter>
          <ButtonTheme />
          <Routes />
        </BrowserRouter>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
