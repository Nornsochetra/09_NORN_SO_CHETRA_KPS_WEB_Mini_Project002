import CardComponent from "@/components/CardComponent";
import React from "react";

const TaskStatus = ({ groupedTasks }) => {
  //   <div className="w-82 mx-15">
  //   <CardComponent task={taskData} />
  // </div>
  return (
    <main className="container">
      <section className="flex px-16 py-2 gap-15">
        <div className="w-full">
          <p className="text-[#F96666]">Not Started</p>
          <div className="border border-b mt-3 border-[#F96666]"></div>
          {groupedTasks.NOT_STARTED?.map((task, index) => (
            <CardComponent key={index} task={task} />
          ))}
        </div>
        <div className="w-full">
          <p className="text-[#4379F2]">In Progress</p>
          <div className="border border-b mt-3 border-[#4379F2]"></div>
          {groupedTasks.IN_PROGRESS?.map((task, index) => (
            <CardComponent key={index} task={task} />
          ))}
        </div>
        <div className="w-full ">
          <p className="text-[#009990]">Finished</p>
          <div className="border border-b mt-3 border-[#009990]"></div>
          {groupedTasks.FINISHED?.map((task, index) => (
            <CardComponent key={index} task={task} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TaskStatus;
