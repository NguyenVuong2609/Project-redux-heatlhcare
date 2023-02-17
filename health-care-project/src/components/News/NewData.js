import React from "react";
import { card1 } from "../../assets/Img/index";
import {Link} from "react-router-dom";

export default function NewData() {
  return (
    <div className="coronata">
      <div className="container">
        <div className="row d_flex grid">
          <div className="col-md-7">
            <div className="coronata_img text_align_center">
              <figure>
                <img src={card1} alt="#" />
              </figure>
            </div>
          </div>
          <div className="col-md-5 oder1">
            <div className="titlepage text_align_left">
              <h2>Coronavirus là gì?</h2>
              <p>
                Bệnh do vi-rút corona (COVID-19) là một bệnh truyền nhiễm do
                vi-rút SARS-CoV-2 gây ra. Vi-rút này có thể lây từ miệng hoặc
                mũi của người bị nhiễm bệnh dưới dạng các giọt nhỏ khi họ ho,
                hắt hơi, nói chuyện, hát hoặc thở. Những giọt này có kích thước
                từ các giọt bắn lớn theo đường hô hấp cho đến các sol khí nhỏ.
                Bạn có thể bị nhiễm bệnh khi hít phải vi-rút nếu đang ở gần
                người nhiễm COVID-19 hoặc chạm vào bề mặt có vi-rút rồi lại chạm
                tay vào mắt, mũi hoặc miệng. Vi-rút dễ lây lan hơn trong nhà và
                ở những nơi đông đúc.
              </p>
              <Link className="read_more" to={"/news"}>Tìm hiểu thêm</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
