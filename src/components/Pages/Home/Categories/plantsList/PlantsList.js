import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { addToCart } from "../../store/cartSlice";

import "./PlantsList.scss";
import { ReactComponent as CartSvg } from "../../../../../style/icons/Cart.svg";
import { ReactComponent as HeartSvg } from "../../../../../style/icons/Vector.svg";
import { ReactComponent as SearchSvg } from "../../../../../style/icons/Search.svg";

const PlantsList = ({ data }) => {
  // const history = useNavigate();
  // const dispatch = useDispatch();
  // const { data, error, isloading } = useGetAllProductsQuery();
  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   history.push("/cart");
  // };
  return (
    <div className="plants">
      <ul className="plants__list">
        <li className="plants__item">
          <img className="plants__image" src={data.img} alt="Flower" />
          <div className="plants__icons">
            <div className="plants__cart hover-svg"><CartSvg/></div>
            <div className="plants__heart hover-svg"><HeartSvg/></div>
            <div className="plants__search hover-svg"><SearchSvg/></div>
          </div>
          <p className="plants__description">{data.desc}</p>

          <span className="plants__price">{data.price}</span>
        </li>
      </ul>
    </div>
  );
};

export default PlantsList;
