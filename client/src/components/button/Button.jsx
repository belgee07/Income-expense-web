import React from "react";

const Button = ({ color, text, textColor, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn w-full ${color} ${textColor} hover:bg-blue-700`}
    >
      {text}
    </button>
  );
};

export default Button;
