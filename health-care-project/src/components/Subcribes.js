import React from "react";
import { useNavigate } from "react-router-dom";

export default function Subcribes() {
  const navigate = useNavigate();
  return (
    <div className="update">
      <div className="cevery_white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Cập nhật thường xuyên tin tức...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cevery_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <button className="subsci_btn" onClick={()=>{navigate("/register")}}>Đăng ký ngay!</button>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
