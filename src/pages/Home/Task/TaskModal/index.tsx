import { useEffect } from "react";
import { Button, Group, Modal, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { handleAddDayNotificatiion } from "../../../../redux/calendar/calendarSlicer";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useTask } from "../context/TaskContext";
import { createTask, deleteTask } from "./service";

interface ITaskItem {
  id: number;
  userId: number;
  title: string;
  dateTime: Date;
  description: string;
}

interface ITasks extends Array<ITaskItem> {}
interface IProps {
  tasks: ITasks | undefined;
  setTasks: Function;
}

const TaskModal = ({ tasks, setTasks }: IProps) => {
  const { task, openModal, setOpenModal } = useTask();
  const dispatch = useAppDispatch();

  const dateTime = useAppSelector((state) => state.calendar.value);

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },

    validate: {
      title: (value) => (value.length > 0 ? null : "Digite o Título"),
      description: (value) => (value.length > 0 ? null : "Digite a Descrição"),
    },
  });

  useEffect(() => {
    form.setValues({ title: task?.title, description: task?.description });
  }, [task]);

  return (
    <>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title={"Criar tarefa"}
      >
        <form
          onSubmit={form.onSubmit((values) => {
            createTask(
              values.title,
              values.description,
              dateTime,
              (data: ITaskItem) => {
                const month = dateTime.getMonth() + 1;
                const year = dateTime.getFullYear();
                const day = dateTime.getDate();
                setOpenModal(false);
                dispatch(
                  handleAddDayNotificatiion({ year, month, days: [day] })
                );
                setTasks([...tasks, data]);
              }
            );
          })}
        >
          <TextInput
            id="title"
            withAsterisk
            label="Título"
            sx={{ marginBottom: 20 }}
            {...form.getInputProps("title")}
          />

          <Textarea
            id="description"
            withAsterisk
            label="Descrição"
            sx={{ marginBottom: 20 }}
            minRows={10}
            {...form.getInputProps("description")}
          />

          <Group position="right" mt="md">
            <Button
              id="loginButton"
              onClick={() => deleteTask(task?.id, () => setOpenModal(false))}
              color="red"
            >
              Deletar
            </Button>
            <Button id="loginButton" type="submit">
              {task?.id ? "Alterar" : "Cadastrar"}
            </Button>
          </Group>
        </form>
      </Modal>
      <Button onClick={() => setOpenModal(true)}>Nova tarefa</Button>
    </>
  );
};

export default TaskModal;
