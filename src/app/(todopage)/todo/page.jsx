import CardComponent from "@/components/CardComponent";
import React from "react";
import NavBarComponent from "./component/NavBarComponent";
import NewTaskComponent from "./component/NewTaskComponent";
import TaskStatus from "./component/TaskStatus";
import { getAllWorkSpace } from "@/service/workspaceService";
import Logo from "@/components/logo";
import ListWorkSpaceComponent from "./component/ListWorkSpaceComponent";
import ListFavoriteComponent from "./component/ListFavoriteComponent";

const TodoPage = async ({ workspaceId, getTask }) => {
  const workSpaceId = await workspaceId;
  const taskData = await getTask;
  const workSpaceData = await getAllWorkSpace();

  const groupTasksByStatus = (tasks) => {
    return tasks.reduce((acc, task) => {
      const status = task.status || "NOT_STARTED";
      acc[status] = [...(acc[status] || []), task];
      return acc;
    }, {});
  };

  const groupedTasks = groupTasksByStatus(taskData.payload || []);

  return (
    <section className="flex w-full min-h-screen">
      <aside className="w-80 flex flex-col min-h-full">
        <div className="pt-12 mx-auto">
          <Logo />
        </div>
        <article className="flex flex-col">
          <ListWorkSpaceComponent
            workspace={workSpaceData}
            workId={workSpaceId}
          />
          <ListFavoriteComponent
            favourite={workSpaceData}
            favouriteId={workspaceId}
          />
        </article>
      </aside>
      <section className="flex w-full min-h-full">
        <section className="flex flex-col w-full">
          <nav className="flex-col">
            <NavBarComponent navBarId={workSpaceId} />
          </nav>
          <article className="flex flex-col w-full">
            <TaskStatus groupedTasks={groupedTasks} />
          </article>
        </section>
        <article className="relative">
          <div className="absolute bottom-0 right-40">
            <NewTaskComponent />
          </div>
        </article>
      </section>
    </section>
  );
};

export default TodoPage;
