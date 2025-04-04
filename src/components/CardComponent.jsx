import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

export default function CardComponent({ task }) {
  // formated date
  const formatDate = (dataString) => {
    const date = new Date(dataString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className="border border-gray-300 rounded-xl mt-8 overflow-y-auto">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{task.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {task.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {task.tag}
          </p>

          {/* status */}
          <div
            className={`rounded-full w-8 h-8 ${
              task.status === "NOT_STARTED"
                ? "bg-[#F96666]"
                : task.status === "IN_PROGRESS"
                ? "bg-[#4379F2]"
                : "bg-[#009990]"
            }`}
          ></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-36 truncate ${
              task.status === "NOT_STARTED"
                ? "border-[#F96666] text-[#F96666]"
                : task.status === "IN_PROGRESS"
                ? "border-[#4379F2] text-[#4379F2]"
                : "border-[#009990] text-[#009990]"
            }`}
          >
            <SelectValue placeholder={task.status} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> {formatDate(task.startDate)}
        </p>
      </div>
    </div>
  );
}
