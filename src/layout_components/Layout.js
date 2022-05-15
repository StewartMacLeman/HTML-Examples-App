import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({topic, subTopic, getTitles, clearH2}) => {
  return (
    <>
      <Header topic={topic} subTopic={subTopic} />
      <Nav getTitles={getTitles} clearH2={clearH2}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
