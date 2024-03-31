import React from "react";
import ReactSlider from "react-slider";
import "./CustomRangeSlider.css";

function Price() {
  const marks = [0, 25, 50, 100, 500, 1000];

  return (
    <div className="price">
      <div className="marks">
        {marks.map((mark, index) => (
          <p key={index} className="mark">{`$${mark}`}</p>
        ))}
      </div>
      <ReactSlider
        className="custom-slider"
        thumbClassName="custom-thumb"
        trackClassName="custom-track"
        defaultValue={50}
        ariaLabel={"Slider"}
        min={0}
        max={1000}
        // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <ReactSlider
        className="custom-slider"
        // thumbClassName="custom-thumb"
        trackClassName="custom-track"
        defaultValue={50}
        ariaLabel={"Slider"}
        min={0}
        max={1000}
        // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
}

export default Price;
