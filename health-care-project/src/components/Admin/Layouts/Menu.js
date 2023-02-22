import React, { useState } from "react";
import { UserOutlined, SettingOutlined, HomeOutlined, ReadOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function MenuAdmin() {
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("User", "user", <UserOutlined />, [
      getItem("View/Edit", "1"),
      getItem("Banned List", "2"),
      getItem("VIP member", "3")
    ]),
    getItem("Blog", "blog", <ReadOutlined />, [
      getItem("View/Edit", "4"),
      getItem("Create new post", "5"),
    ]),
    getItem("Home", "home", <HomeOutlined />, [
      getItem("About", "6"),
      getItem("News", "7"),
    ]),
    getItem("Setting", "setting", <SettingOutlined />, [
      getItem("Log out", "8"),
    ]),
  ];
  const [current, setCurrent] = useState("1");
 
  const onClick = (e) => {
    let url = `/admin/${e.keyPath[1]}/${e.keyPath[0]}`
    navigate(url);
    setCurrent(e.key);
  };
  return (
    <div className="admin-menu">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
