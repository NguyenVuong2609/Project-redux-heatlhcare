import React from "react";

export default function DoctorMain() {
  return (
    <div className="doctors">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center ">
              <h2>Bác sĩ nói gì về chúng tôi...</h2>
            </div>
          </div>
        </div>
        <div className="row d_flex">
          <div className=" col-md-6">
            <div id="ho_efcet" className="reader text_align_center">
              <i>
                <img src="images/doctoryen.png" alt="#" />
              </i>
              <h3>Bác sĩ Hải Yến - 1992</h3>
              <p>
                Hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn tâm lý tình cảm.{" "}
                <br />
                Hiện đang sở hữu shop Hoa Beauty Flower với hàng triệu người
                dùng. <br />
                Dù mới hoạt động những doanh thu đã lên tới hàng triệu VNĐ.{" "}
                <br />
                Đây là trang web cực kỳ hữu ích để tôi có thể chia sẻ những kinh
                nghiệm quý báu của bản thân.
              </p>
              <span>
                <img src="images/do.png" alt="#" />
              </span>
            </div>
          </div>
          <div className=" col-md-6">
            <div id="ho_efcet" className="reader text_align_center">
              <i>
                <img src="images/doctorthu.png" alt="#" />
              </i>
              <h3>Bác sĩ Minh Thu - 2000</h3>
              <p>
                Hiện đang là giám đốc bệnh viện Quốc tế Đa khoa Yên Bái, 5 năm kinh nghiệm trong lĩnh vực điều dưỡng. <br />
                Diễn đàn đã mang lại 1 địa điểm để đội ngũ làm việc trong lĩnh
                vực y tế chúng tôi và người bệnh đang cần tư vấn, có thể kết nối
                với nhau để trao đổi. <br/>
                Cảm ơn đội ngũ phát triển đã tạo ra diễn đàn bổ ích này.
              </p>
              <span>
                <img src="images/do.png" alt="#" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
