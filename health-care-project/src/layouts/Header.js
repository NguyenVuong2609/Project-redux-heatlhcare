import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../styles/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { FiUser, FiLogIn } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { act_edit_user, act_edit_user_login, act_logout } from "../actions";
import { Typography } from "antd";
const { Paragraph } = Typography;

export default function Header() {
  const iconStatus = useSelector((state) => state.headerIcon);
  const account = useSelector((state) => state.accountLogin);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setInfo(account);
    setName(account.name);
  }, [account]);

  const [name, setName] = useState("");
  const handleSave = () => {
    dispatch(act_edit_user(info.id, { ...info, name: name }));
    dispatch(act_edit_user_login({ ...info, name: name }));
  };
  let element =
    iconStatus != true ? (
      <Button variant="light" onClick={() => navigate("/login")}>
        <FiLogIn />
      </Button>
    ) : (
      <DropdownButton
        id={`dropdown-button-drop-start`}
        drop={"start"}
        variant="secondary"
        title={<FiUser />}
      >
        <Dropdown.Item eventKey="1" onClick={handleShow}>
          Thông tin
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          onClick={() => {
            dispatch(act_logout(false));
            localStorage.removeItem("LOGIN_ACC");
          }}
        >
          Đăng xuất
        </Dropdown.Item>
        <Dropdown.Divider />
      </DropdownButton>
    );
  return (
    <header className="header-area">
      <div className="left">
        <Link to={"https://www.google.com/search"}>
          <i className="fa fa-search" aria-hidden="true" />
        </Link>
      </div>
      <div className="right">
        <div className="mb-2">{element}</div>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Paragraph
              editable={{
                onChange: setName,
              }}
            >
              {name}
            </Paragraph>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Email: {info.email}</div>
          <div>Tuổi: {info.age}</div>
          <div>Số điện thoại: {info.phone}</div>
          <div>Loại tài khoản: {info.rank ? "VIP" : "Thường"}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}
