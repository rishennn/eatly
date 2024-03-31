import React from "react";
import ControlItem from "./ControlItem/ControlItem";

function Control() {
  return (
    <div className="wrapper">
      <div className="control">
        <div className="control_left">
          <h1 className="title">
            Control <span>Purchases</span> Via Dashboard
          </h1>
          <ControlItem
            img="./image/dish1.png"
            title="Chicken Hell"
            status="On The Way"
            date="3:09 PM"
          />
          <ControlItem
            img="./image/dish2.png"
            title="Swe Dish"
            status="Delivered"
            date="Yesterday"
          />
          <ControlItem
            img="./image/dish3.png"
            title="Fish Hell Veg"
            status="Canceled"
            date="Yesterday"
          />
        </div>
        <div className="control_right">
          <div className="purchase__graph-header">
            <h3 className="purchase__graph-title">Purchases</h3>
            <select className="purchase__select" name="timeline">
              <option className="purchase__value" value="mounth">
                This mounth
              </option>
              <option className="purchase__value" value="week">
                This week
              </option>
              <option className="purchase__value" value="year">
                This year
              </option>
            </select>
          </div>
          <ul className="purchase__graph-info list-reset">
            <li className="purchase__graph-item purchase__graph-item--purpule">
              <div className="purchase__graph-inner">
                <span className="purchase__graph-icon"></span>
                <div className="purchase__graph-about">
                  <h4 className="purchase__graph-name">Expense</h4>
                  <p className="purchase__graph-text">Increased By 10%</p>
                </div>
              </div>
              <div className="purchase__graph-cost">$409.00</div>
            </li>
            <li className="purchase__graph-item purchase__graph-item--yellow">
              <div className="purchase__graph-inner">
                <span className="purchase__graph-icon"></span>
                <div className="purchase__graph-about">
                  <h4 className="purchase__graph-name">Vocher Usage</h4>
                  <p className="purchase__graph-text">Increased By 10%</p>
                </div>
              </div>
              <div className="purchase__graph-cost">$45.78</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Control;
