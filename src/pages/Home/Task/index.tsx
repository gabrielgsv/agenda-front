import { Card, Center, Group, Text } from "@mantine/core";
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
    <Center sx={{ flexDirection: "column", gap: 30 }}>
      <Text className={style.title} weight="bold">
        Tarefas
      </Text>
      {tasks?.map((task) => (
        <Card sx={{ width: 500 }} key={task.id}>
          <Card.Section withBorder inheritPadding py="xs">
            <Group position="apart">
              <Text weight={500} size="xl">
                {task.title}
              </Text>
            </Group>
          </Card.Section>
          <Text mt="sm" color="dimmed" size="sm">
            {task.description}
          </Text>
        </Card>
      ))}
    </Center>
  );
};

export default Task;
