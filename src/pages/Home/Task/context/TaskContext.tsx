import React, { createContext, useState, useContext } from "react";

type ITaskItem = {
  id: number | null;
  userId: number | null;
  title: string;
  dateTime: Date | null;
  description: string;
};

type ITaskContext = {
  task: ITaskItem | null;
  setTask: React.Dispatch<React.SetStateAction<ITaskItem | any>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DEFAULT_VALUE = {
  task: {
    id: null,
    userId: null,
    title: "",
    dateTime: null,
    description: "",
  },
  setTask: () => {},
  openModal: false,
  setOpenModal: () => {},
};

const TaskContext = createContext<ITaskContext>(DEFAULT_VALUE);

type Props = {
  children: JSX.Element;
};
export default function TaskProvider({ children }: Props) {
  const [task, setTask] = useState(DEFAULT_VALUE.task);
  const [openModal, setOpenModal] = useState(false);

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must be used within a FormProvider");
  const { task, setTask, openModal, setOpenModal } = context;

  return {
    task,
    setTask,
    openModal,
    setOpenModal,
  };
}
