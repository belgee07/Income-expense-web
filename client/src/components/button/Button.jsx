import React from "react";

export const Button = ({ handleClick, color, textColor, text }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn w-full rounded-20px  ${color} ${textColor} hover:bg-blue-700`}
    >
      {text}
    </button>
  );
};
