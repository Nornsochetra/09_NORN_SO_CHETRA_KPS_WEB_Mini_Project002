"use server";

import { updateNewWorkSpaceService } from "@/service/workspaceService";

export const updateWorkSpaceAction = async (formData) => {
  console.log("form data is : ", formData);
  try {
    const updateWorkSpace = await updateNewWorkSpaceService(formData);
    return updateWorkSpace;
  } catch (error) {
    console.error("Error in Updating Workspace:", error);
    return error;
  }
};
