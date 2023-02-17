import React from "react";
import Header from "../components/Admin/Layouts/Header";
import MenuAdmin from "../components/Admin/Layouts/Menu";
import { Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Admin() {
  const params = useParams();
  return (
    <div>
      <Header />
      <div className="admin-main">
        <div className="col-2">
          <MenuAdmin />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
