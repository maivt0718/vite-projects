import React from "react";

const ButtonCustom = ({
  content,
  type = "button",
  bgColor = "bg-blue-500",
  onClick
}) => {
  return (
    <button type={type} className={`px-5 py-2 text-white ${bgColor} rounded`} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonCustom;
