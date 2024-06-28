import { ChildrenType } from "app/Types";
import Footer from "Components/Footer";
import Header from "Components/Header";
import React from "react";

const Layout = (props: ChildrenType) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Layout;
