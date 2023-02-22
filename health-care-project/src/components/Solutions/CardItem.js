import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { postImg } from "../../assets/Img";

export default function CardItem(props) {
  const { info } = props;
  return (
    <Card border={info.colorCover}>
      <Card.Img variant="top" src={postImg[info.image]} style={{height: "300px"}} />
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>
          {info.subTitle}
        </Card.Text>
        <Button variant="primary">Xem thêm</Button>
      </Card.Body>
    </Card>
  );
}
