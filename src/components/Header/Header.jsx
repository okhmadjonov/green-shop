import React from "react";
import { Outlet } from "react-router-dom";
import "./Header.scss";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import HeaderSearchCartLogin from "./HeaderSearchCartLogin/HeaderSearchCartLogin";

function Header() {
  return (
    <div className="header-container">
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderSearchCartLogin />
      <Outlet />
    </div>
  );
}

export default Header;
