import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Select,
  Switch,
  Upload,
} from "antd";
import UploadPicture from "./UploadPicture";
const { TextArea } = Input;

export default function FormCreatePost() {
  const handleChange = (e) => {
    console.log(e);
  };
  const [lock, setLock] = useState(false);
  const [newPost, setNewPost] = useState({});
  const getImgUrl = (file)=> {
    let filePath = file.name.split('.');
    setNewPost({...newPost, image: filePath[0]});
  }
  console.log(newPost);
  return (
    <div className="blog-main">
      <div className="form-box">
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
            <Input name="title" />
          </Form.Item>
          <Form.Item label="Sub-title">
            <Input name="sub-title" />
          </Form.Item>
          <Form.Item label="Select color cover">
            <Select labelInValue onChange={(e)=> console.log(e)}>
              <Select.Option title="colorcover" value="danger">Red</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Content">
            <TextArea rows={4} name="body" />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch
              checkedChildren={"Post Now"}
              unCheckedChildren={"Post Later"}
              onChange={(e) => setLock(e)}
            />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
           <UploadPicture fileUrl={getImgUrl}/>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
