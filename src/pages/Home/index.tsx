import { Center } from "@mantine/core";
import "dayjs/locale/pt-br";
import Calendar from "./Calendar";
import Task from "./Task";
import style from "./home.module.css";

const Home = () => {
  return (
    <Center className={style.pageContainer}>
      <Calendar />
      <Task />
    </Center>
  );
};

export default Home;
