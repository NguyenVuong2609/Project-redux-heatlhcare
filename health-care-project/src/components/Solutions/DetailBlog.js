import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { postImg } from "../../assets/Img";

export default function DetailBlog() {
  const params = useParams();
  const listPosts = useSelector((state) => state.listPosts);
  let info = listPosts.filter((post) => {
    return post.id == params.id;
  });

  return (
    <div className="coronata">
      <div className="container">
        <div className="row d_flex grid">
          <div className="col-md-7">
            <div className="coronata_img text_align_center">
              <figure><img src={postImg[info[0].image]} alt="#" /></figure>
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
            </div>
          </div>
        </div>
        <div className="row d_flex">
          <div className="col-12">
            Đại dịch COVID-19 là một đại dịch bệnh truyền nhiễm với tác nhân là
            virus SARS-CoV-2 và các biến thể của nó đang diễn ra trên phạm vi
            toàn cầu. Khởi nguồn vào cuối tháng 12 năm 2019 với tâm dịch đầu
            tiên tại thành phố Vũ Hán thuộc miền Trung Trung Quốc đại lục, bắt
            nguồn từ một nhóm người mắc viêm phổi không rõ nguyên nhân. Giới
            chức y tế địa phương xác nhận rằng trước đó họ đã từng tiếp xúc, chủ
            yếu với những thương nhân buôn bán và làm việc tại chợ bán buôn hải
            sản Hoa Nam. Các nhà khoa học Trung Quốc đã tiến hành nghiên cứu và
            phân lập được một chủng coronavirus mà Tổ chức Y tế Thế giới lúc đó
            tạm gọi là 2019-nCoV, có trình tự gen giống với SARS-CoV trước đây
            với mức tương đồng lên tới 79,5%. Các ca nghi nhiễm đầu tiên ở Vũ
            Hán được báo cáo vào ngày 31 tháng 12 năm 2019. Trường hợp tử vong
            do SARS-CoV-2 đầu tiên xảy ra ở Vũ Hán vào ngày 9 tháng 1 năm 2020.
            Các ca nhiễm virus đầu tiên được xác nhận bên ngoài Trung Quốc bao
            gồm hai người phụ nữ ở Thái Lan và một người đàn ông ở Nhật Bản. Sự
            lây nhiễm virus từ người sang người đã được xác nhận cùng với tỷ lệ
            bùng phát dịch tăng vào giữa tháng 1 năm 2020. Ngày 23 tháng 1 năm
            2020, chính phủ Trung Quốc quyết định phong tỏa Vũ Hán, toàn bộ hệ
            thống giao thông công cộng và hoạt động xuất - nhập khẩu đều bị tạm
            ngưng. Ngày 11 tháng 3 năm 2020, Tổ chức Y tế Thế giới (WHO) ra
            tuyên bố gọi "COVID-19" là "Đại dịch toàn cầu". Chính phủ các quốc
            gia trên thế giới đã tiến hành phản ứng đáp trả nhằm bảo vệ sức khỏe
            người dân cũng như các nhóm cộng đồng trên toàn cầu, bao gồm: hạn
            chế đi lại, phong tỏa kiểm dịch, ban bố tình trạng khẩn cấp, sử dụng
            lệnh giới nghiêm, tiến hành cách ly xã hội, hủy bỏ các sự kiện đông
            người, đóng cửa trường học và những cơ sở dịch vụ, kinh doanh ít
            quan trọng, khuyến khích người dân tự nâng cao ý thức phòng bệnh,
            đeo khẩu trang, hạn chế ra ngoài khi không cần thiết, đồng thời
            chuyển đổi mô hình hoạt động kinh doanh, học tập, làm việc từ truyền
            thống sang trực tuyến. Ví dụ: phong tỏa để kiểm dịch toàn bộ tại Ý
            và tỉnh Hồ Bắc của Trung Quốc; các biện pháp giới nghiêm khác nhau ở
            Trung Quốc và Hàn Quốc; phương pháp sàng lọc tại các sân bay và nhà
            ga; hạn chế hoặc hủy bỏ các hoạt động du lịch tới những khu vực,
            vùng, quốc gia có nguy cơ nhiễm dịch bệnh ở mức cao. Ngoài ra, các
            trường học cũng đã phải đóng cửa trên toàn quốc hoặc ở một số vùng
            tại hơn 160 quốc gia, ảnh hưởng đến 87% học sinh, sinh viên trên
            toàn thế giới, tính đến ngày 28 tháng 3 năm 2020. Những ảnh hưởng
            trên toàn thế giới của đại dịch COVID-19 hiện nay bao gồm: thiệt hại
            sinh mạng con người, sự bất ổn về kinh tế và xã hội, tình trạng bài
            ngoại và phân biệt chủng tộc đối với người gốc Trung Quốc và Đông Á,
            việc truyền bá thông tin sai lệch trực tuyến và vũ khí sinh học.
          </div>
        </div>
      </div>
    </div>
  );
}
