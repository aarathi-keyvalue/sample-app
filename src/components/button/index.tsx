import React from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-4 rounded ring-opacity-75 focus:ring focus:outline-none text-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
