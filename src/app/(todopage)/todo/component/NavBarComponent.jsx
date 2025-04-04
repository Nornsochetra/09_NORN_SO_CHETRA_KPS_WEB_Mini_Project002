import React from "react";
import { ChevronRight, BellMinus, Star } from "lucide-react";
import Image from "next/image";
const NavBarComponent = ({ navBarId }) => {
  return (
    <main>
      <section className=" flex items-center px-16 py-8 justify-between">
        <div className="flex flex-row gap-5">
          <p className="text-lg">Workspace</p>
          <ChevronRight size={25} color="#1E293B" />
          <p className="text-[#4379F2] border-b-2 border-[#4379F2] text-lg">
            {navBarId?.payload?.workspaceName}
          </p>
        </div>
        <div className="flex flex-row gap-5 items-center mr-37">
          <BellMinus size={20} color="#1E293B" />
          <div className="w-10 h-10 bg-blue-400 rounded-full items-center">
            {/* <img src="/itachi.jpg" alt="itachi" width={20} height={20}></img> */}
            <div className="flex flex-col ml-14 w-full mt-[-5px]">
              <p>{navBarId?.payload?.workspaceName}</p>
              <p className="text-[#009990]">
                {navBarId?.payload?.workspaceName}@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="border border-b text-[#DBDDDE]"></div>
      <div className="flex flex-row justify-between px-16 py-5">
        <h2 className="text-2xl font-semibold">
          {navBarId?.payload?.workspaceName}
        </h2>
        <div className="bg-[#94A3B833] w-10 p-2 items-center rounded-xl">
          <Star size={25} />
        </div>
      </div>
    </main>
  );
};

export default NavBarComponent;
