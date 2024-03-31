import React from "react";
import { ReactComponent as User } from "../../../assets/img/svg/User.svg";

function ArticleBlog() {
  return (
    <div className="wrapper">
      <div className="articleBlog">
        <h2>How to Order Food On eatly</h2>
        <div className="articleUser">
          <User />
          <div>
            <p>Written By</p>
            <h3>Perperzon</h3>
          </div>
        </div>
				<img src="/image/Article.png" alt="" />
      </div>
    </div>
  );
}

export default ArticleBlog;
