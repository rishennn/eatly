import React from "react";

function DownloadApp() {
  return (
    <div className="wrapper">
      <div className="downloadApp">
        <div className="app_left">
          <img src="/image/Mobile.png" alt="mobile" />
        </div>
        <div className="app_right">
          <h1 className="title">
            Premium <span>Quality</span> For Your Health
          </h1>
          <ul>
            <li>
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </li>
            <li>
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </li>
          </ul>
          <button className="withBG">Download &#x2192;</button>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
