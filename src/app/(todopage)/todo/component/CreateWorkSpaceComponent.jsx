"use client";
import React, { useState } from "react";
import { SquarePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewWorkSpace } from "@/lib/zod/workspace";
import { createWorkSpaceAction } from "@/action/createWorkSpaceAction";
import { Input } from "@heroui/input";

const CreateWorkSpaceComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createNewWorkSpace),
  });
  const handleSubmitWork = async (data) => {
    createWorkSpaceAction(data);
    reset();
  };
  return (
    <section>
      <article className="mt-16 mr-3.5 flex justify-between items-center">
        <p className="text-[#94A3B8] text-xl font-semibold">Workspace</p>
        <button onClick={() => setShowForm(true)}>
          <SquarePlus size={24} color="#94A3B8" />
        </button>
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-90 relative">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setShowForm(false)}
              >
                ✖
              </button>
              <p className=" text-lg text-[#1E293B] mx-4">
                Create New Workspace
              </p>
              <form onSubmit={handleSubmit(handleSubmitWork)}>
                <div className="bg-white p-4 rounded-lg">
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      id="workspaceName"
                      name="workspaceName"
                      className="peer bg-transparent h-10 w-72 rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Type inside me"
                      {...register("workspaceName")}
                    />
                    <label
                      htmlFor="workspaceName"
                      className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                    >
                      Please type your workspace name
                    </label>
                    <p className="text-red-400 text-base mt-1">
                      {errors?.workspaceName?.message}
                    </p>
                  </div>
                </div>
                <Input
                  type="submit"
                  value={"Create"}
                  className="w-25 bg-blue-500 text-white p-2 rounded mt-2 ml-51"
                />
              </form>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default CreateWorkSpaceComponent;
