import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { Col, Row } from "antd";
import CardItem from "../components/Solutions/CardItem";

export default function Solutions() {
  const listItem = useSelector((state) => state.listPosts);
  const [listPosts, setListPosts] = useState();
  useEffect(() => {
    setListPosts(listItem);
  }, [listItem]);
  const params = useParams();

  let element;
  if (params.id === undefined){
    if (listPosts != null) {
      element = listPosts.map((item) => {
        return (
          <Col span={8} key={item.id} style={{ marginTop: "12px" }}>
            <CardItem info={item} />
          </Col>
        );
      });
    }
  } else {
    element = <Outlet/>
  }
  return (
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
          <Row gutter={16}>{element}</Row>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}
