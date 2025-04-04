import headerToken from "@/app/api/headerToken";
import { baseUrl } from "./constants";

export const getAllTask = async (taskId) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/tasks/workspace/${taskId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        headers: header,
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error get all task : ", error);
    throw error;
  }
};

// create new task
export const createNewTask = async (taskId) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/task/workspace/${taskId}`, {
      method: "POST",
      headers: {
        accept: "*/*",
        header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskId),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error Creaate New Task : ", error);
    throw error;
  }
};
