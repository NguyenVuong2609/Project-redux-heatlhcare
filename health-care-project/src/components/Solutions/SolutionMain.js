import React from "react";
import { Col, Row } from "antd";
import CardItem from "./CardItem";
import "../../styles/Solutions.css"

export default function SolutionMain() {
  return (
    <div className="protect">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Các giải pháp</h2>
              <p>
                Kiến thức cần thiết khi vấn đề xảy ra với bạn
              </p>
            </div>
          </div>
        </div>
        <div className="solutions">
        <Row gutter={16}>
          <Col span={8}>
            <CardItem/>
          </Col>
          <Col span={8}>
            <CardItem/>
          </Col>
          <Col span={8}>
            <CardItem/>
          </Col>
        </Row>
        </div>
      </div>
    </div>
  );
}
