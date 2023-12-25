import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <Fragment>
      <NavBar className="layout-navbar" />
      <div id="content">
        <div className="content-outlet">
          <Outlet />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
