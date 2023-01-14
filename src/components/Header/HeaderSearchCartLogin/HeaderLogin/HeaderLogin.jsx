import React from "react";
import "./HeaderLogin.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LogoutSvg } from "../../../../style/icons/Logout.svg";

function HeaderLogin() {
  return (
    <Link className="header-login" to="/">
      <LogoutSvg />
      Login
    </Link>
  );
}

export default HeaderLogin;
