import { headers } from "next/headers";
import { baseUrl } from "./constants";
import headerToken from "@/app/api/headerToken";

export const getAllWorkSpace = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        headers: header,
      }
    );
    const data = await res.json();
    console.log("");
    return data;
  } catch (error) {
    console.error("Get all work space is : ", error);
    throw error;
  }
};

export const getWorkSpaceById = async (workSpaceId) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/workspace/${workSpaceId}`, {
      headers: header,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error get workspace by id : ", error);
    throw error;
  }
};

export const createNewWorkspaceService = async (newWorkSpace) => {
  try {
    const header = await headerToken();

    const res = await fetch(`${baseUrl}/workspace`, {
      method: "POST",
      body: JSON.stringify(newWorkSpace),
      headers: header,
    });
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateNewWorkSpaceService = async (workSpaceId, updateData) => {
  try {
    const header = await headerToken();

    const res = await fetch(`${baseUrl}/workspace/${workSpaceId}`, {
      method: "POST",
      headers: {
        header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error Update is: ", error);
    throw error;
  }
};
