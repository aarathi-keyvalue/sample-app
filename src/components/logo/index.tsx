import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <Image src="/icons/logo.png" alt="logo" width="167" height="58" />
  );
};
