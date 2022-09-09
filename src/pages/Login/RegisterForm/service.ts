import { showNotification } from "@mantine/notifications";
import api from "../../../services/api";

export function register(
  name: string,
  email: string,
  password: string,
  captchaToken: string
) {
  if (name && email && password) {
    api
      .post("/user", {
        email,
        password,
        name,
        captchaToken,
      })
      .then((res) => {
        showNotification({
          title: "Cadastro feito com sucesso",
          message: "",
        });
        location.reload();
      })
      .catch((error) => {
        console.error(error);
        showNotification({
          title: "Erro ao fazer o cadastro",
          message: "Tente novamente",
          color: "red",
        });
      });
  }
}
