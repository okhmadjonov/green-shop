import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
function Button(props) {
  return (
    <Link to="/">
      <button className="default-button">Shop Now</button>
    </Link>
  );
}

export default Button;
