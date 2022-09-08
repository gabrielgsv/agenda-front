import { Button, Card, Center, Image } from "@mantine/core";
import { useState } from "react";
import image from "../../assets/login.svg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <Center sx={{ height: "100vh" }}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section sx={{ padding: 20 }}>
            <Image src={image} width={300} alt="Login draw" />
          </Card.Section>
          {isLogin ?
            <LoginForm />
            :
            <RegisterForm />
          }
          <Button variant="subtle" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Cadastre-se aqui" : "Faça login aqui"}
          </Button>
        </Card>
      </Center>
    </>
  );
};

export default Login;
