"use client";
import { MoreHorizontal, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const ListFavoriteComponent = ({ favourite, favouriteId }) => {
  const router = useRouter();
  function handleGetWorkSpaceId(workId) {
    router.push(`/todo/${workId}`);
  }
  const favoriteWorkspaces =
    favourite?.payload?.filter((data) => data.isFavorite) || [];
  return (
    <article className="w-80 h-full p-5 ">
      <div className="h-64 overflow-y-auto">
        <div className="flex justify-between">
          <h3 className="text-[#94A3B8] text-xl font-semibold mb-2 ">
            Favorite
          </h3>
          <Star size={24} color="#94A3B8" className="mr-4" />
        </div>
        {favoriteWorkspaces.length === 0 ? (
          <p className="text-blue-400 text-center">No favorite workspaces.</p>
        ) : (
          <ul>
            {favoriteWorkspaces.map((data, index) => (
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
                <MoreHorizontal size={24} color="#1E293B" className="mr-4" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ListFavoriteComponent;
