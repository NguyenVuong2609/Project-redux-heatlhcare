import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { carosel1, carosel2, carosel3 } from "../assets/Img/index";

export default function Banner() {
  return (
    <div className="full_bg">
      <div className="col-9 carosel-main">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={carosel1} alt="First slide" />
            <Carousel.Caption>
              <h3>Bảo vệ sức khỏe của bạn</h3>
              <p className="text-carosel">Chúng tôi luôn bên bạn.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carosel2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Lời khuyên bổ ích cho bạn</h3>
              <p className="text-carosel">Tư vấn tốt nhất về những vấn đề đối với sức khỏe của bạn.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carosel3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Ứng phó kịp thời</h3>
              <p className="text-carosel">
                Hệ thống y tế kết nối chặt chẽ, luôn sẵn sàng.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
  );
}
