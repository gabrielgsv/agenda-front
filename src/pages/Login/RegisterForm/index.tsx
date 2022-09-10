import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "./service";

const RegisterForm = () => {
  const [captchaToken, setCaptchaToken] = useState("");

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: {
      name: (value) => (value.length > 0 ? null : "Digite o Nome"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)
          ? null
          : "Senha inválida",
    },
  });

  return (
    <>
      <h3>Cadastro</h3>

      <form
        onSubmit={form.onSubmit((values) => {
          register(values.name, values.email, values.password, captchaToken);
          if (captchaToken) {
            console.log("values", values);
          } else {
            showNotification({
              title: "Captcha não resolvido",
              message: 'Clique em "Sou Humano"',
              color: "red",
            });
          }
        })}
      >
        <TextInput
          withAsterisk
          label="Nome"
          placeholder="nome"
          sx={{ marginBottom: 20 }}
          {...form.getInputProps("name")}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="seuemail@email.com"
          sx={{ marginBottom: 20 }}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          withAsterisk
          label="Senha"
          placeholder="*********"
          sx={{ marginBottom: 20 }}
          {...form.getInputProps("password")}
        />

        <HCaptcha
          sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
          onVerify={(token) => setCaptchaToken(token)}
        />

        <Group position="right" mt="md">
          <Button type="submit">Cadastrar</Button>
        </Group>
      </form>
    </>
  );
};

export default RegisterForm;
