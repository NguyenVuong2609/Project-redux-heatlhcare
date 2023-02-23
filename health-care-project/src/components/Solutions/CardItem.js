import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { postImg } from "../../assets/Img";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function CardItem(props) {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const { info } = props;
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
    }, 1000);
  };
  return (
    <Card border={info.colorCover}>
      {contextHolder}
      <Card.Img
        variant="top"
        src={postImg[info.image]}
        style={{ height: "300px" }}
      />
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>{info.subTitle}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            openMessage();
            setTimeout(() => {
              navigate(`/solutions/${info.id}`);
            }, 2000);
          }}
        >
          Xem thêm
        </Button>
      </Card.Body>
    </Card>
  );
}
