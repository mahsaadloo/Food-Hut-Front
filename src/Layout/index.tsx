import { ChildrenType } from "app/Types";
import Footer from "Components/Footer";
import Header from "Components/Header";
import SectionFour from "Components/SectionFour";
import SectionOne from "Components/SectionOne";
import SectionThree from "Components/SectionThree";
import SectionTwo from "Components/SectionTwo";
import React from "react";

const Layout = (props: ChildrenType) => {
  const { children } = props;
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
};

export default Layout;
