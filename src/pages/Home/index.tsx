import { Center } from "@mantine/core";
import "dayjs/locale/pt-br";
import Calendar from "./Calendar";
import Task from "./Task";
import style from "./home.module.css";
import TaskProvider from "./Task/context/TaskContext";

const Home = () => {
  return (
    <Center className={style.pageContainer}>
      <Calendar />

      <TaskProvider>
        <Task />
      </TaskProvider>
    </Center>
  );
};

export default Home;
