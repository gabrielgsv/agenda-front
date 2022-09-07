import { Card, Center, Image } from "@mantine/core";
import image from "../../assets/login.svg";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Center sx={{ height: "100vh" }}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section sx={{ padding: 20 }}>
            <Image src={image} width={300} alt="Login draw" />
          </Card.Section>
          <LoginForm />
        </Card>
      </Center>
    </>
  );
};

export default Login;
