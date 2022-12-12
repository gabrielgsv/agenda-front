import { UserId } from "../../../config/storage";
import api from "../../../services/api";

interface IResponse {
  data: [
    {
      id: number;
      userId: number;
      title: string;
      dateTime: Date;
      description: string;
    }
  ];
}
export async function getTaskByDay(date: Date): Promise<IResponse> {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const userId = sessionStorage.getItem(UserId) || "";

  return await api.get(
    `task/task-day?day=${day}&month=${month}&year=${year}&userId=${userId}`
  );
}
