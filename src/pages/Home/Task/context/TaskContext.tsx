import React, { createContext, useState, useContext } from "react";

interface ITaskContext {
  task:
    | {
        id: number;
        userId: number;
        title: string;
        dateTime: Date;
        description: string;
      }[]
    | null;
  setTask:
    | React.Dispatch<React.SetStateAction<{}>>
    | React.Dispatch<React.SetStateAction<null>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskContext = createContext<ITaskContext | null>(null);

type Props = {
  children: JSX.Element;
};
export default function TaskProvider({ children }: Props) {
  const [task, setTask] = useState(null);
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
