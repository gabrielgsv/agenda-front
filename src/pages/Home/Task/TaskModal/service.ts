import { UserId } from "../../../../config/storage";
import api from "../../../../services/api";

export async function createTask(
  title: string,
  description: string,
  dateTime: Date,
  callback: Function
) {
  const userId = sessionStorage.getItem(UserId) || "";
  return api
    .post("task", {
      userId: Number(userId),
      title,
      description,
      dateTime,
    })
    .then((res) => {
      console.log("res", res.data);
      callback(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function deleteTask(
  id: number | null | undefined,
  callback: Function
) {
  return api
    .delete(`task/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
