import React, { FC } from "react";
import Presenter from "./presenter";

const Layout: FC = ({ children }) => {
  return <Presenter>{children}</Presenter>;
};

export default Layout;
