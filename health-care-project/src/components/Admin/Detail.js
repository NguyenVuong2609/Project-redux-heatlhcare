import React from "react";
import { useParams } from "react-router-dom";
import UserAdmin from "./UserAdmin";
import BlogAdmin from "./BlogAdmin";
import HomeAdmin from "./HomeAdmin";
import ModalLogout from "./ModalLogout";

export default function Detail() {
  let params = useParams();
  let element =
    params.detail == "user" ? (
      <UserAdmin params={params} />
    ) : params.detail == "blog" ? (
      <BlogAdmin params={params} />
    ) : params.detail == "home" ? (
      <HomeAdmin params={params} />
    ): <ModalLogout/>

  return <div>{element}</div>;
}
