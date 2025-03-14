import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "outline" | "light";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
}) => {
  let className = "h-[50px] rounded-[20px] px-4 py-2 text-[15px] whitespace-nowrap inline-flex items-center justify-center cursor-pointer";

  
  switch (variant) {
    case "outline":
      className += " w-[180px] border border-[#3B94D0] text-[#3B94D0] hover:bg-[#3B94D0] hover:bg-opacity-10";
      break;

    case "light":
      className += " w-[180px] bg-gray-100 text-gray-800";
      break;

    case "primary":
    default:
      className += " w-[180px] text-white bg-[#3B94D0] hover:bg-opacity-80";
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;