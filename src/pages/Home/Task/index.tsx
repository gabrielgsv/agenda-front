import { ActionIcon, Button, Card, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useAppSelector } from "../../../redux/hooks";
import { useTask } from "./context/TaskContext";
import { getTaskByDay } from "./service";
import style from "./task.module.css";
import TaskModal from "./TaskModal";

const Task = () => {
  interface ITaskItem {
    id: number;
    userId: number;
    title: string;
    dateTime: Date;
    description: string;
  }

  interface ITasks extends Array<ITaskItem> {}
  const [tasks, setTasks] = useState<ITasks | undefined>(undefined);
  const taskDate = useAppSelector((state) => state.calendar.value);
  const { setTask, setOpenModal } = useTask();

  useEffect(() => {
    const date = new Date(taskDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    getTaskByDay(day, month, year).then((res) => {
      setTasks(res.data);
    });
  }, [taskDate]);

  const handleClickCard = (task: ITaskItem) => {
    setTask(task);
    setOpenModal(true);
  };

  return (
    <div className={style.taskContainer}>
      <Text className={style.title} weight="bold">
        Tarefas
        <TaskModal tasks={tasks} setTasks={setTasks} />
      </Text>
      {tasks?.map((task) => (
        <div className={style.cardConteiner} key={task.id}>
          <Card withBorder shadow="sm" onClick={() => handleClickCard(task)}>
            <Card.Section withBorder inheritPadding py="xs">
              <Text weight={500} size="xl">
                {task.title}
              </Text>
            </Card.Section>
            <Text size="sm">{task.description}</Text>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Task;
