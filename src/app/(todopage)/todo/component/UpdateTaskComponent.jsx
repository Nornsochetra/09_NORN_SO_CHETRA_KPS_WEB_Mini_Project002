import React, { useState } from "react";

const UpdateTaskComponent = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section>
      <button onClick={() => setShowForm(true)}>
        <MoreHorizontal size={24} color="#1E293B" />
      </button>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-2xl shadow-xl w-90 relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>
            <h2 className="text-lg font-semibold mb-2 mx-4">Update New Task</h2>
            <p className="mx-4">Title</p>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="peer bg-transparent h-10 w-72 rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="Type inside me"
                />
                <label
                  htmlFor="username"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Web mini project 002
                </label>
              </div>
            </div>
            <p className="mx-4">Tag</p>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  className="peer bg-transparent h-10 w-72 rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="Type inside me"
                />
                <label
                  htmlFor="tag"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Mini_Project
                </label>
              </div>
            </div>
            <p className="mx-4">End Date</p>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="peer bg-transparent h-10 w-72 rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="Type inside me"
                />
                <label
                  htmlFor="date"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  April 25th, 2025
                </label>
              </div>
            </div>
            <p className="mx-4">Details</p>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="details"
                  name="details"
                  className="peer bg-transparent h-10 w-72 rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="Type inside me"
                />
                <label
                  htmlFor="details"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Everything about Next.js
                </label>
              </div>
            </div>
            <button className="w-25 bg-blue-500 text-white p-2 rounded mt-2 ml-51">
              Update
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpdateTaskComponent;
