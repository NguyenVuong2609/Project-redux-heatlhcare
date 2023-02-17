import React from "react";

export default function Subcribes() {
  return (
    <div className="update">
      <div className="cevery_white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Get Every Update.... </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cevery_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form id="colof" className="form_subscri">
                <input
                  className="newsl"
                  placeholder="Your Email"
                  type="text"
                  name="Email"
                />
                <button className="subsci_btn">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
