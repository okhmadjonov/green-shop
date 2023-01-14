import React from "react";

import dataSlider from "./dataSlider";
import Carousel from "react-material-ui-carousel";
import "./Slider.scss";
import Button from "../../../Button/Button";

function Slider({ item }) {
  return (
    <Carousel>
      {dataSlider.map((item, index) => {
        return <Slide key={index} item={item} />;
      })}
    </Carousel>
  );
}

function Slide({ item }) {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-container_inner">
          <div className="main__content">
            <span className="main__description">{item.beforeTitle}</span>

            <h1 className="main__title">
              {item.title} <span className="main__span">{item.titleGreen}</span>
            </h1>

            <p className="main__text">{item.subtitle}</p>
            <Button />
          </div>
          <div className="main__images">
            <img
              className="main__img"
              src={item.bigImageUrl}
              alt="Flower Big "
            />

            <img
              className="main__image"
              src={item.littleImageUrl}
              alt="Flower Small "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
