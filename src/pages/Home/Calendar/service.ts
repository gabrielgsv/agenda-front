import { UserId } from "../../../config/storage";
import api from "../../../services/api";

interface IResponse {
  data: [
    {
      id: number;
      dateTime: Date;
    }
  ];
}
export async function getDaysNotification(
  month: number,
  year: number
): Promise<IResponse> {
  const userId = sessionStorage.getItem(UserId) || "";

  return await api.get(
    `task/days-of-month?month=${month}&year=${year}&userId=${userId}`
  );
}
