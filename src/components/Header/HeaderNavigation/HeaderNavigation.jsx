import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNavigation.scss";

function HeaderNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <Link>Plant Care</Link>
        </li>
        <li>
          <Link>Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
