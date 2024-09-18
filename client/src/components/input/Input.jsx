import React from "react";

export const Input = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input input-bordered rounded-lg bg-base-100 focus:outline-none w-full"
    />
  );
};
