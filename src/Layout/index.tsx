import { ChildrenType } from "app/Types";
import React from "react";

const Layout = (props: ChildrenType) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Layout;
