import React from "react";
import "./HeaderSCL.scss";
import HeaderCart from "./HeaderCart/HeaderCart";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

function HeaderSearchCartLogin(props) {
  return (
    <div className="header-search-cart-login">
      <HeaderSearch />
      <HeaderCart />
      <HeaderLogin />
    </div>
  );
}

export default HeaderSearchCartLogin;
