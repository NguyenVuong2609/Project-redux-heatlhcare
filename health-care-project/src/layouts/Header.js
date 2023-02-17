import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../styles/Header.css";
import { FiUser } from "react-icons/fi";


export default function Header() {

  return (
    <header className="header-area">
      <div className="left">
        <Link to={"https://www.google.com/search"}>
          <i className="fa fa-search" aria-hidden="true" />
        </Link>
      </div>
      <div className="right">
        <div className="mb-2">
          <DropdownButton
            id={`dropdown-button-drop-start`}
            drop={"start"}
            variant="secondary"
            title={<FiUser/>}
          >
            <Dropdown.Item eventKey="1">Thông tin</Dropdown.Item>
            <Dropdown.Item eventKey="2">Đổi mật khẩu</Dropdown.Item>
            <Dropdown.Item eventKey="3">Đăng xuất</Dropdown.Item>
            <Dropdown.Divider />
          </DropdownButton>
        </div>
      </div>
      <div className="container">
        <div className="row d_flex">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <Link to={"/"}>Trang chủ</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>Thông tin</Link>
                  </li>
                  <li>
                    <Link to={"/solutions"}>Giải pháp</Link>
                  </li>
                  <li>
                    <Link to={"/"} className="active">
                      Health Care
                    </Link>
                  </li>
                  <li>
                    <Link to={"/news"}>Tin tức</Link>
                  </li>
                  <li>
                    <Link to={"/doctor"}>Tư vấn</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
