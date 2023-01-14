import React from "react";
import "./HeaderCart.scss";
import { Link } from "react-router-dom";
import { ReactComponent as CartSvg } from "../../../../style/icons/Cart.svg";
function HeaderCart() {
  return (
    <div className="header-cart">
      <Link to="/cart">
        {" "}
        <CartSvg />
      </Link>
    </div>
  );
}

export default HeaderCart;
