import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogo.scss";
import { ReactComponent as LogoSvg } from "../../../style/icons/Logo.svg";

function HeaderLogo() {
  return (
    <div className="header-logo">
      <Link to="/">
        <LogoSvg />
      </Link>
    </div>
  );
}

export default HeaderLogo;
