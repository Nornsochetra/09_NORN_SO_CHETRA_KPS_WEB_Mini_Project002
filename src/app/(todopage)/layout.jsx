import Logo from "@/components/logo";
import React from "react";
import ListWorkSpaceComponent from "./todo/component/ListWorkSpaceComponent";
import ListFavoriteComponent from "./todo/component/ListFavoriteComponent";
import { getAllWorkSpace } from "@/service/workspaceService";
import { Provider } from "@/context/provider";

const TodoPageLayout = async ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default TodoPageLayout;
