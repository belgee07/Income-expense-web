import React from "react";

export const Button = ({ handleClick, color, textColor, text, height }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn w-full rounded-20px h-8 ${color} ${textColor} hover:bg-blue-700`}
    >
      {text}
    </button>
  );
};
