import { Card, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { getTaskByDay } from "./service";
import style from "./task.module.css";

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

  useEffect(() => {
    const date = new Date(taskDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    getTaskByDay(day, month, year).then((res) => {
      setTasks(res.data);
    });
  }, [taskDate]);

  return (
    <div className={style.taskContainer}>
      <Text className={style.title} weight="bold">
        Tarefas
      </Text>
      {tasks?.map((task) => (
        <div style={{ height: 400, padding: 10 }} key={task.id}>
          <Card withBorder shadow="sm">
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
