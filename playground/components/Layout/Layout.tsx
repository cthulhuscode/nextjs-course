import React, { ReactNode } from "react";
import { Navbar } from "@components/Navbar/Navbar";

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <br />
      <footer>Footer</footer>
    </>
  );
};
