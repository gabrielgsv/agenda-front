import { Button, Card, Center, Image } from "@mantine/core";
import { useState } from "react";
import Lottie from "lottie-react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import calendarLottie from "../../assets/calendar.lottie.json";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Center sx={{ height: "100vh" }}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section sx={{ padding: 20, width: 340, height: 300 }}>
            <Lottie animationData={calendarLottie} loop={false} />
          </Card.Section>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <Button variant="subtle" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Cadastre-se aqui" : "Faça login aqui"}
          </Button>
        </Card>
      </Center>
    </>
  );
};

export default Login;
