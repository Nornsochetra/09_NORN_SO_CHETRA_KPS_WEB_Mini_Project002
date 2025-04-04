"use client";
import { useRouter } from "next/navigation";
import CreateWorkSpaceComponent from "./CreateWorkSpaceComponent";
import UpdateWorkSpaceComponent from "./UpdateWorkSpaceComponent";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const ListWorkSpaceComponent = ({ workspace, workId }) => {
  const router = useRouter();
  function handleGetWorkSpaceId(workId) {
    router.push(`/todo/${workId}`);
  }

  return (
    <aside className="w-80 h-full p-5 ">
      <CreateWorkSpaceComponent />
      <div className="h-64 overflow-y-auto">
        {workspace.length === 0 ? (
          <p className="text-blue-400 text-center">No workspaces.</p>
        ) : (
          <ul>
            {workspace.payload.map((data, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 px-3 hover:bg-[#F8FAFC] rounded-xl"
                onClick={() => handleGetWorkSpaceId(data.workspaceId)}
              >
                <span className="flex items-center">
                  <span
                    className="w-2 h-2 rounded-full inline-block mr-3"
                    style={{ backgroundColor: getRandomColor() }}
                  ></span>
                  <span className="font-medium">{data.workspaceName}</span>
                </span>
                <UpdateWorkSpaceComponent />
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ListWorkSpaceComponent;
