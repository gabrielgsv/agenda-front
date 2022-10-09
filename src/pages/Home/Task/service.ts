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
export async function getTaskByDay(
  day: number,
  month: number,
  year: number
): Promise<IResponse> {
  const userId = sessionStorage.getItem(UserId) || "";

  return await api.get(
    `task/task-day?day=${day}&month=${month}&year=${year}&userId=${userId}`
  );
}
