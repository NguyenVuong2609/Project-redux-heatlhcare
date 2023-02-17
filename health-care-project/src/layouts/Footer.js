import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Mục lục</h3>
                <ul className="menu_footer">
                  <li>
                    <Link to={"/"}>Trang chủ</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Truyền thông</Link>
                  </li>
                  <li>
                    <Link to={"/solutions"}>Giải pháp</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Bảo vệ</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Liên hệ</Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Thông tin</h3>
                <p>
                  Chúng tôi là tổ chức phi lợi nhuận, là diễn đàn kết nối những
                  bệnh nhân với những lời khuyên, giải pháp tốt nhất cho họ. Bạn
                  có thể tìm kiếm mọi thông tin liên quan đến các mầm bệnh cũng
                  như cách phòng tránh tại đây.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3  text_align_left">
                <h3>Liên hệ ngay</h3>
                <ul className="top_infomation">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    Hanoi, Vietnam
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    Call : +01 1234567890
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="Javascript:void(0)">Email : demo@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Vietnam</h3>
                <div className="map">
                  <img src="images/map.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>
                  © 2023 All Rights Reserved. Design by{" "}
                  <a href="https://html.design/"> Vuong Nguyen</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
