import React from "react";

export default function CaseMain() {
  return (
    <div className="cases">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center ">
              <h2>Các cơ sở y tế gần bạn</h2>
              <p>Hỗ trợ tận tình 24/7</p>
            </div>
          </div>
        </div>
        <div className="row d_flex">
          <div className=" col-md-4">
            <div className="latest text_align_center">
              <figure>
                <img src="images/thucuchospital.png" alt="#" />
              </figure>
              <a className="read_more" href="https://benhvienthucuc.vn/">
                Liên hệ
              </a>
              <div className="nostrud">
                <h3>Bệnh viện Thu Cúc</h3>
                <p>
                  BỆNH VIỆN ĐA KHOA QUỐC TẾ THU CÚC Địa chỉ: 286 Thụy Khuê, Tây
                  Hồ, Hà Nội <br /> Cấp cứu (24/24): 0901 793 122 <br /> Trực
                  sản (24/24): 0936 245 499 <br /> Liên hệ: 1900 5588 92 hoặc
                  0936 388 288 đặt lịch khám
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-4">
            <div className="latest text_align_center">
              <figure>
                <img src="images/vinmecdanang.jpg" alt="#" />
              </figure>
              <a className="read_more" href="https://www.vinmec.com/vi/benh-vien-da-khoa-quoc-te-vinmec-da-nang-98367/hoi-suc-cap-cuu">
                Liên hệ
              </a>
              <div className="nostrud">
                <h3>Bệnh viện Đa khoa quốc tế Vinmec Đà Nẵng</h3>
                <p>
                  Bệnh viện Đa khoa Quốc tế Vinmec Đà Nẵng là bệnh viện thứ sáu
                  trong Hệ thống Y tế Vinmec, chính thức đi vào hoạt động từ
                  tháng 09/2017. Tọa lạc tại đường 30 tháng 4, Khu dân cư số 4
                  Nguyễn Tri Phương, P. Hòa Cường Bắc, Q. Hải Châu, TP Đà Nẵng
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-4">
            <div className="latest text_align_center">
              <figure>
                <img src="images/cityhospital.jpg" alt="#" />
              </figure>
              <a className="read_more" href="https://cih.com.vn/">
                Liên hệ
              </a>
              <div className="nostrud">
                <h3>Bệnh viện quốc tế City TP. HCM</h3>
                <p>
                  BỆNH VIỆN QUỐC TẾ CITY khánh thành ngày 05/01/2014 với 21
                  chuyên khoa lâm sàng và cận lâm sàng như: Sản phụ khoa, Nhi
                  khoa, Phẫu thuật, Tim mạch, Tai mũi họng, Nhãn khoa, Tiết
                  niệu, Tiêu hóa gan mật, Nội khoa…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
