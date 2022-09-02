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
      className={`py-2 px-4 rounded bg-yellow-500 hover:bg-yellow-600 focus:outline-none ring-opacity-75 ring-yellow-400 focus:ring text-white text-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
