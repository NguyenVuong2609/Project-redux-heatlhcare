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

  let element = "";
  if (listPosts != null && listPosts.length > 0) {
    element = (
      <div className="solutions row d_flex">
        <div className="col-md-4 col-sm-12">
            <CardItem info={listPosts[0]} />
        </div>
        <div className="col-md-4 col-sm-12">
          <CardItem info={listPosts[1]} />
        </div>
        <div className="col-md-4 col-sm-12">
          <CardItem info={listPosts[2]} />
        </div>
      </div>
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
        {element}
      </div>
    </div>
  ) : (
    <></>
  );
}
