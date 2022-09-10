import { showNotification } from "@mantine/notifications";
import { Auth } from "../../../config/storage";
import api from "../../../services/api";

export function login(email: string, password: string, navigate: Function) {
  if (email && password) {
    api
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        sessionStorage.setItem(Auth, res.data.access_token);
        showNotification({
          title: "Login feito com sucesso",
          message: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        showNotification({
          title: "Erro ao fazer o login",
          message: "Tente novamente",
          color: "red",
        });
      });
  }
}
