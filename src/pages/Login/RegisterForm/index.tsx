import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const RegisterForm = () => {
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
        onSubmit={form.onSubmit((values) =>
          // login(values.email, values.password, navigate)
          console.log("values", values)
        )}
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

        <TextInput
          withAsterisk
          label="Senha"
          placeholder="*********"
          type="password"
          sx={{ marginBottom: 20 }}
          {...form.getInputProps("password")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Cadastrar</Button>
        </Group>
      </form>
    </>
  );
};

export default RegisterForm;
