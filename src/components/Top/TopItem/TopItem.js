import React from "react";
import { ReactComponent as Star } from "../../../assets/img/svg/Star.svg";
import { ReactComponent as Bookmark } from "../../../assets/img/svg/Bookmark.svg";
import { ReactComponent as Heart } from "../../../assets/img/svg/Heart.svg";

function TopItem({ img, status, statusColor, title, fav, toCart }) {
	const handleHeartClick = () => {
		alert("heart clicked")
	}

	const handleCartClick = () => {
		alert("toCart clicked")
	}

	const handleBookmarkClick = (e) => {
		e.preventDefault()
		alert("bookmark clicked")
	}

  return (
    <div className="restCurrent">
      <div className="top_img">
        <img src={img} alt="first" />
        {fav && (
          <button className="heart" onClick={handleHeartClick}>
            <Heart />
          </button>
        )}
      </div>
      <div className="top_info">
        <span className={`info_status_${statusColor}`}>{status}</span>
        <h3 className="info_title">{title}</h3>
        {toCart ? <p className="price">$12.99</p> : null}
        <div className="info_flex">
          <div className="info_desc">
            <p>24min</p>
            <div>
              <Star />
              4.8
            </div>
          </div>

          {toCart ? (
            <button className="toCart" onClick={handleCartClick}>+</button>
          ) : (
            <button onClick={handleBookmarkClick}>
              <Bookmark />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopItem;
