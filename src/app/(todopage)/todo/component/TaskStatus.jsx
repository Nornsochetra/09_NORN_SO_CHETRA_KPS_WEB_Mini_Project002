import React from "react";

const TaskStatus = () => {
  return (
    <main className="container">
      <section className="flex px-16 py-2 gap-15">
        <div className="w-full">
          <p className="text-[#F96666]">Not Started</p>
          <div className="border border-b mt-3 border-[#F96666]"></div>
        </div>
        <div className="w-full">
          <p className="text-[#4379F2]">In Progress</p>
          <div className="border border-b mt-3 border-[#4379F2]"></div>
        </div>
        <div className="w-full ">
          <p className="text-[#009990]">Finished</p>
          <div className="border border-b mt-3 border-[#009990]"></div>
        </div>
      </section>
    </main>
  );
};

export default TaskStatus;
