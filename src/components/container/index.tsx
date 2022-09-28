import { FC } from "react";

export const Container: FC = ({ children }) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};
