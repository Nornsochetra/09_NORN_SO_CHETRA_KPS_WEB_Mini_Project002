import CardComponent from "@/components/CardComponent";
import React from "react";
import NavBarComponent from "./component/NavBarComponent";
import NewTaskComponent from "./component/NewTaskComponent";
import TaskStatus from "./component/TaskStatus";

const todoPage = async () => {
  return (
    <section className="flex w-full min-h-full">
      <section className="flex flex-col w-full">
        <nav className="flex-col">
          <NavBarComponent />
        </nav>
        <article className="flex flex-col w-full">
          <TaskStatus />
          <div className="w-82 mx-15">
            <CardComponent />
          </div>
        </article>
      </section>
      <article className="relative">
        <div className="absolute bottom-0 right-40">
          <NewTaskComponent />
        </div>
      </article>
    </section>
  );
};

export default todoPage;
