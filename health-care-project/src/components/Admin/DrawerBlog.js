import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../../actions";
import { userContext } from "./UserAdmin";
const { Option } = Select;

export default function DrawerBlogForm() {
    const contextList = useContext(userContext);
    const dataView = useSelector((state) => state.userPostData);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({});
    const [newData, setNewData] = useState({});
    useEffect(() => {
      if (dataView !== "") {
        setPostData({
          ...dataView.data,
          status: dataView.data.status ? "true" : "false"
        });
      }
      setNewData(dataView.data);
      setOpen(dataView.status);
    }, [dataView]);
    console.log(dataView);
    const [open, setOpen] = useState(false);
    const onClose = () => {
      setOpen(false);
      dispatch(types.act_view_user("", false));
    };
    const saveNewData = () => {
      dispatch(types.act_edit_user(newData.id, newData ));
      onClose();
    };
    const handleChange = (e) => {
      console.log(e);
    };
    const checkInfo = (e) => {
      let name = e.title;
      let value = e.value;
      setNewData({...postData, [name]: value = (value == "true" ? true : false)});
    };
    return !open ? (
      <></>
    ) : (
      <Drawer
        title="Edit post"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={saveNewData} type="primary">
              Save
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          hideRequiredMark
          initialValues={postData}
          onChange={handleChange}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please enter title",
                  },
                ]}
              >
                <Input placeholder="Please enter title"/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="sub-title"
                label="Sub-title"
                rules={[
                  {
                    required: true,
                    message: "please enter sub-title",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter sub-title"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name="body"
                label="Body"
                rules={[
                  {
                    required: true,
                    message: "please enter body",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter body"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    );
  }
  