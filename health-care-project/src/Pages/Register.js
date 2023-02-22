import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/LoginRegister.css";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  Select,
  message,
} from "antd";
import { act_create_user } from "../actions";

const { Option } = Select;
const residences = [
  {
    value: "vietnam",
    label: "Việt Nam",
    children: [
      {
        value: "hanoi",
        label: "Hà Nội",
      },
      {
        value: "hcmcity",
        label: "TP. Hồ Chí Minh",
      },
      {
        value: "danang",
        label: "Đà Nẵng",
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export default function Register() {
  const [newUser, setNewUser] = useState({
    status: true,
    rank: false,
    email: "",
    password: "",
    name: "",
    age: "",
    address: "",
    gender: "",
    phone: "",
  });
  const listUsers = useSelector(state=> state.listUser);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );
  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleCascader = (e) => {
    setNewUser({
      ...newUser,
      address:
        e[1] === "hanoi"
          ? "Hà Nội"
          : e[1] === "hcmcity"
          ? "TP Hồ Chí Minh"
          : "Đà Nẵng",
    });
  };
  const handleGender = (e) => {
    setNewUser({ ...newUser, gender: e });
  };
  const handleCreate = () => {
    if (
      newUser.email == "" ||
      newUser.name == "" ||
      newUser.password == "" ||
      newUser.address == "" ||
      newUser.age == "" ||
      newUser.phone == "" ||
      newUser.gender == ""
    ) {
      messageApi.open({
        type: "warning",
        content: "Vui lòng điền đầy đủ thông tin!",
      });
    } else {
      let checkSameEmail = listUsers.filter(user=> {
        if (user.email == newUser.email){
          return user;
        }
      })
      if (checkSameEmail.length > 0){
        messageApi.open({
          type: "error",
          content: "Email này đã được sử dụng! Vui lòng điền email khác!",
        });
      } else {
        delete newUser.confirm
        delete newUser.agreement
        dispatch(act_create_user(newUser));
        messageApi.open({
          type: "success",
          content: "Tạo tài khoản thành công!",
        });
      }
    }
  };
  return (
    <div className="register-container">
      {contextHolder}
      <div className="col-7 register-img"></div>
      <div className="register-form col-5">
        <Form
          {...formItemLayout}
          form={form}
          onFinish={onFinish}
          onChange={handleChange}
          initialValues={{
            residence: ["vietnam", "hanoi"],
            prefix: "84",
          }}
          style={{
            width: "100%",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Vui lòng nhập email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận lại mật khẩu",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Hai mật khẩu chưa giống nhau")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="residence"
            label="Địa chỉ"
            rules={[
              {
                type: "array",
                required: true,
                message: "Vui lòng chọn địa chỉ",
              },
            ]}
          >
            <Cascader onChange={handleCascader} options={residences} />
          </Form.Item>

          <Form.Item
            name="name"
            label="Họ và tên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="age"
            label="Tuổi"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tuổi",
              },
            ]}
          >
            <Input type="number"/>
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Vui lòng điền số điện thoại của bạn",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn giới tính",
              },
            ]}
          >
            <Select
              placeholder="Chọn giới tính của bạn"
              onChange={handleGender}
            >
              <Option value="male">Nam</Option>
              <Option value="female">Nữ</Option>
              <Option value="other">Khác</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Vui lòng xác nhận quy định của chúng tôi")
                      ),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Tôi đã đọc đầy đủ <a href="">quy định</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={handleCreate}>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
