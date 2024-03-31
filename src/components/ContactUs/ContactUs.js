import React from "react";

function ContactUs() {

	const handleContactSubmit = (e) => {
		e.preventDefault()

		alert("contact submited")
	}
  return (
    <div className="wrapper">
      <div className="contactUs">
        <h1 className="title">
          Costomer <span>Support</span>
        </h1>
        <form action="/" method="post" onSubmit={handleContactSubmit}>
          <input type="text" name="fullName" placeholder="FULL NAME" required/>
          <input type="email" name="email" placeholder="ENTER YOUR EMAIL"required />
          <input
						id="desc"
            type="text"
            name="desc"
            placeholder="ENTER THE PROBLEM OR QUERY"
						required
          />
          <button type="submit" className="withBG">
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
