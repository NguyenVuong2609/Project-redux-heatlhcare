import React from "react";

export default function AboutData() {
  return (
    <div className="about">
      <div className="container_width">
        <div className="row d_flex">
          <div className="col-md-7">
            <div className="titlepage text_align_left">
              <h2>Dịch bệnh hàng đầu: CORONA VIRUS</h2>
              <p>
                Trên toàn cầu , tính đến 7:34 chiều CET, ngày 14 tháng 2 năm
                2023 , đã có 756.135.075 trường hợp được xác nhận nhiễm
                COVID-19, bao gồm 6.841.152 trường hợp tử vong , được báo cáo
                cho WHO. Tính đến ngày 30 tháng 1 năm 2023 , tổng cộng
                13.168.935.724 liều vắc xin đã được sử dụng.
              </p>
              <a className="read_more" href="https://covid19.who.int/">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="about_img text_align_center">
              <figure>
                <img src="images/about.png" alt="#" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
