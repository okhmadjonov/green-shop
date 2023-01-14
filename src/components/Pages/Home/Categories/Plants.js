import React from "react";
import plantsData from "../../../../assets/data/plantsData";
import sizeData from "../../../../assets/data/sizeData";
import categoriesData from "../../../../assets/data/categoriesData";
import banner from "../../../../assets/img/Super Sale Banner.png";
import { Pagination } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Plants.scss";
import PlantsList from "./plantsList/PlantsList";

function Plants() {
  return (
    <div className="plantsData">
      <div className="container">
        <div className="plantsData__wrapper--categories">
          <div className="plantsData__superSale">
            <div className="plantsData__categories">
              <h3 className="plantsData__categoriesTitle">Categories</h3>
              <ul className="plantsData__categoriesList">
                {categoriesData.map(({ id, title, quantity }) => (
                  <li className="plantsData__categoriesItem" key={id} id={id}>
                    <div className="plantsData__categoriesWrapper plantsData__categoriesWrapper--active">
                      <p className="plantsData__categoriestext">{title}</p>
                      <span className="plantsData__categoriesspan">
                        {quantity}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="plantsData__categoriesText">Price Range</h3>
              <form
                className="plantsData__categoriesContent"
                onInput="result.value = slider.value">
                <input
                  className="plantsData__categoriesInput"
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                //   value="30"
                />
                <label className="plantsData__categoriesLabel">
                  Price:{" "}
                  <span className="plantsData__categoriesSpan">
                    $39 - $1230
                  </span>
                  <br />
                  <button className="plantsData__categoriesButton">
                    Filter
                  </button>
                </label>
              </form>
              <h3 className="plantsData__categoriesTitle">Size</h3>
              <ul className="plantsData__categoriesList">
                {sizeData.map(({ id, title, size }) => (
                  <li key={id} id={id} className="plantsData__categoriesItem">
                    <div className="plantsData__categoriesWrapper plantsData__categoriesWrapper--active">
                      <p className="plantsData__categoriestext">{title}</p>
                      <span className="plantsData__categoriesspan">{size}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <img className="plantsData__image" src={banner} alt="" />
          </div>

          <div className="plantsData__content">
            <div className="plantsData__texts">
              <ul className="plantsData__list">
                <li className="plantsData__item">
                  <p className="plantsData__text plantsData__text--active">
                    All Plants
                  </p>
                </li>

                <li className="plantsData__item">
                  <p className="plantsData__text">New Arrivals</p>
                </li>

                <li className="plantsData__item">
                  <p className="plantsData__text">Sale</p>
                </li>
              </ul>

              <form className="plantsData__form">
                <label className="plantsData__label">Short by:</label>

                <select className="plantsData__select">
                  <option value="default sort">
                    Default sorting <KeyboardArrowDownIcon />
                  </option>

                  <option value="money">Sort by money</option>
                  <option value="time">Sort by time</option>
                </select>
              </form>
            </div>

            <div className="plantsData__wrapper">
              {plantsData.map((item) => (
                <PlantsList data={item} key={item.id} />
              ))}
            </div>

            <div className="plantsData__pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plants;
