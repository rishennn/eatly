import React from "react";

function Subscribe() {
  const handleSubscribeSubmit = (e) => {
    e.preventDefault();

    alert("subscribe clicked");
  };
  return (
    <div className="wrapper">
      <div className="subscribe">
        <h1>GET 50%</h1>
        <form action="" onSubmit={handleSubscribeSubmit}>
          <input
            type="text"
            placeholder="Enter Your Email Address"
            required
          />
          <button type="submite">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
