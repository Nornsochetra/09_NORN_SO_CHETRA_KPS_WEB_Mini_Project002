import React from "react";
import { LogOut } from "lucide-react";
const LogOutComponent = () => {
  return (
    <section className="flex items-center mx-5 gap-3">
      <LogOut size={20} color="#009990" />
      <p className="text-[#009990] text-lg font-semibold">Logout</p>
    </section>
  );
};

export default LogOutComponent;
