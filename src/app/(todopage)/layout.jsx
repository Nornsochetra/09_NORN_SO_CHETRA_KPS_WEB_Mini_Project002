"use server";
import CardComponent from "@/components/CardComponent";
import Logo from "@/components/logo";
import React from "react";
import ListWorkSpaceComponent from "./todo/component/ListWorkSpaceComponent";
import ListFavoriteComponent from "./todo/component/ListFavoriteComponent";
import { getAllWorkSpace } from "@/service/workspaceService";
import LogOutComponent from "./todo/component/LogOutComponent";

const TodoPageLayout = async ({ children }) => {
  const workSpaceData = await getAllWorkSpace();
  return (
    <section className="flex w-full h-full">
      <aside className="w-80 flex flex-col min-h-full">
        <div className="pt-12 mx-auto">
          <Logo />
        </div>
        <article className="flex flex-col">
          <ListWorkSpaceComponent workspace={workSpaceData} />
          <ListFavoriteComponent favourite={workSpaceData} />
          <LogOutComponent />
        </article>
      </aside>
      {children}
    </section>
  );
};

export default TodoPageLayout;
