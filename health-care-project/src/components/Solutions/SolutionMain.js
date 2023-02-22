import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import CardItem from "./CardItem";
import "../../styles/Solutions.css";

export default function SolutionMain() {
  const listItem = useSelector((state) => state.listPosts);
  const [listPosts, setListPosts] = useState();
  useEffect(() => {
    setListPosts(listItem);
  }, [listItem]);

  let element="";
  if (listPosts != null && listPosts.length > 0) {
    element = (
      <Row gutter={16}>
        <Col span={8}>
          <CardItem info={listPosts[0]}/>
        </Col>
        <Col span={8}>
          <CardItem info={listPosts[1]}/>
        </Col>
        <Col span={8}>
          <CardItem info={listPosts[2]}/>
        </Col>
      </Row>
    );
  }
  return listPosts != null && listPosts.length > 0 ? (
    <div className="protect">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Các giải pháp</h2>
              <p>Kiến thức cần thiết khi vấn đề xảy ra với bạn</p>
            </div>
          </div>
        </div>
        <div className="solutions">
         {element}
        </div>
      </div>
    </div>
  ) : <></>
}
