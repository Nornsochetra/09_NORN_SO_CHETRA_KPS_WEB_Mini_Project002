"use server";

import { createNewWorkspaceService } from "@/service/workspaceService";

export const createWorkSpaceAction = async (formData) => {
  try {
    const newCreateNewSpace = await createNewWorkspaceService(formData);
    return newCreateNewSpace;
  } catch (error) {
    console.error("Error in Register:", error);
    return error;
  }
};
