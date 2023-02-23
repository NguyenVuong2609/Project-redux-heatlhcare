import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage text_align_left">
          <h2>Contact Us</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <form id="request" className="main_form">
          <div className="row">
            <div className="col-md-12 ">
              <input
                className="contactus"
                placeholder="Full Name"
                type="type"
                name=" Name"
              />
            </div>
            <div className="col-md-12">
              <input
                className="contactus"
                placeholder="Phone"
                type="type"
                name="Phone Number"
              />
            </div>
            <div className="col-md-12">
              <input
                className="contactus"
                placeholder="Email"
                type="type"
                name="Email"
              />
            </div>
            <div className="col-md-12">
              <textarea
                className="textarea"
                placeholder="Message"
                type="type"
                message="Name"
                defaultValue={""}
              />
            </div>
            <div className="col-md-12">
              <button className="send_btn">Send Now</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1hSJI5w-gsG-RFj5jcwFJKP_7aEU&hl=vi&ehbc=2E312F"
            width={600}
            height={540}
            frameBorder={0}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
