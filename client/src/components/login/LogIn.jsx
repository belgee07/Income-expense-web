import React from "react";

export const LogIn = () => {
  return (
    <div className="flex">
      <div className="w-6/12 bg-white flex flex-col justify-center items-center">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered bg-white w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered bg-white w-full max-w-xs"
        />
        <button className="btn bg-blue-600  text-white">Secondary</button>
      </div>
      <div className="bg-blue-600 w-6/12 h-screen"></div>
    </div>
  );
};
