import { getWorkSpaceById } from "@/service/workspaceService";
import React from "react";
import TodoPage from "../page";
import { getAllTask } from "@/service/taskService";

const WorkSpaceIdPage = async ({ params: ParamsPromise }) => {
  const { workspaceid } = await ParamsPromise;
  const workSpaceById = await getWorkSpaceById(workspaceid);
  const getAllTaskData = await getAllTask(workspaceid);

  return <TodoPage workspaceId={workSpaceById} getTask={getAllTaskData} />;
};
export default WorkSpaceIdPage;
