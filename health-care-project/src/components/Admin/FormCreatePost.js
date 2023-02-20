import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Form, Input, Select, Switch } from "antd";
import UploadPicture from "./UploadPicture";
import { useDispatch } from "react-redux";
import * as types from "../../actions/index";
const { Title } = Typography;
const { TextArea } = Input;

export default function FormCreatePost() {
  const [lock, setLock] = useState(false);
  const [newPost, setNewPost] = useState({});

  const dispatch = useDispatch();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewPost({ ...newPost, [name]: value });
  };
  const getImgUrl = (file) => {
    let filePath = file.name.split(".");
    setNewPost({ ...newPost, image: filePath[0] });
  };
  const handleCreate = () => {
    dispatch(types.act_add_new_post({ ...newPost, status: lock }));
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputSubtitle").value = "";
    document.getElementById("inputBody").value = "";
  };
  return (
    <div className="blog-main">
      <div className="form-box">
        <Title level={2} italic>
          Create a new Post
        </Title>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          onChange={handleChange}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Title">
            <Input name="title" id="inputTitle" />
          </Form.Item>
          <Form.Item label="Sub-title">
            <Input name="sub-title" id="inputSubtitle" />
          </Form.Item>
          <Form.Item label="Select color cover">
            <Select
              labelInValue
              onChange={(e) => {
                setNewPost({ ...newPost, colorCover: e.value });
              }}
            >
              <Select.Option value="success">Green</Select.Option>
              <Select.Option value="warning">Orange</Select.Option>
              <Select.Option value="danger">Red</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Content">
            <TextArea rows={4} name="body" id="inputBody" />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch
              checkedChildren={"Post Now"}
              unCheckedChildren={"Post Later"}
              onChange={(e) => setLock(e)}
            />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList" name={"img"}>
            <UploadPicture fileUrl={getImgUrl} />
          </Form.Item>
          <Form.Item label="Button">
            <Button onClick={handleCreate}>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
