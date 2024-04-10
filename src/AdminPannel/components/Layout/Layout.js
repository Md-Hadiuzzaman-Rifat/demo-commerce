import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header></Header>
      <div className="adminLayout">{children}</div>
    </div>
  );
};

export default Layout;
