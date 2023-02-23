import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginRegister.css";
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { act_login, act_open_admin } from "../actions";

export default function Login() {
  const listUser = useSelector((state) => state.listUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginAcc, setLoginAcc] = useState({ email: "", password: "" });
  const [fullList, setFullList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  useEffect(()=>{
    setFullList(listUser)
  },[listUser])
  console.log(fullList);
  const handleLogin = () => {
    let checkAcc;
    if (loginAcc.email != "" && loginAcc.password != "") {
      checkAcc = fullList.filter((user) => {
        if (user.email == loginAcc.email && user.password == loginAcc.password) {
         return user;
        }
      });
    } else {
      messageApi.open({
        type: "warning",
        content: "Vui lòng điền đầy đủ email và mật khẩu!",
      });
    }
    if (checkAcc.length > 0) {
      if (checkAcc[0].id == 1){
        dispatch(act_open_admin());
      } else {
        messageApi.open({
          type: "success",
          content: "Đăng nhập thành công!",
        });
        dispatch(act_login(true));
        localStorage.setItem("LOGIN_ACC",JSON.stringify([...checkAcc,true]));
        setTimeout(()=>{
          navigate("/");
        },1000)
      }
    }
  };
  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    setLoginAcc({ ...loginAcc, [name]: value });
  };
  return (
    <div className="container-login">
      {contextHolder}
      <div className="col-12 login-main">
        <div className="login-form col-4">
          <h2>Đăng nhập</h2>
          <Form
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onChange={handleChange}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Xin mời nhập email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Xin mời nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={handleLogin}
              >
                Đăng nhập
              </Button>
              Hoặc <Link to="/register">Tạo tài khoản ngay!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
