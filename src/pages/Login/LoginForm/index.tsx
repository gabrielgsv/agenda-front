import { Group, Button, TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { login } from "./service";

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      password: (value) => (value.length > 0 ? null : "Digite a Senha"),
    },
  });
  const navigate = useNavigate();

  return (
    <>
      <h3>Login</h3>

      <form
        onSubmit={form.onSubmit((values) =>
          login(values.email, values.password, navigate)
        )}
      >
        <TextInput
          id="email"
          withAsterisk
          label="Email"
          placeholder="seuemail@email.com"
          sx={{ marginBottom: 20 }}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          id="password"
          withAsterisk
          label="Senha"
          placeholder="*********"
          sx={{ marginBottom: 20 }}
          {...form.getInputProps("password")}
        />

        <Group position="right" mt="md">
          <Button id="loginButton" type="submit">
            Entrar
          </Button>
        </Group>
      </form>
    </>
  );
};

export default LoginForm;
