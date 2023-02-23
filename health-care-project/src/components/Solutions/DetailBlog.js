import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postImg } from "../../assets/Img";
import { Avatar, List, Space, Input } from "antd";
import { act_patch_post } from "../../actions/index";
const { TextArea } = Input;

export default function DetailBlog() {
  const params = useParams();
  const dispatch = useDispatch();
  const listPosts = useSelector((state) => state.listPosts);
  const listUser = useSelector((state) => state.listUser);
  const account = useSelector((state) => state.accountLogin);
  const iconStatus = useSelector((state) => state.headerIcon);
  const [accountInfo, setAccountInfo] = useState("");
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    setAccountInfo(account);
  }, [account]);

  let info = listPosts.filter((post) => {
    return post.id == params.id;
  });
  let data;

  if (info.length > 0) {
    data = info[0].comment.map((post) => {
      let user = listUser.find((user) => {
        return user.id == post.userid;
      });
      return {
        title: user.name,
        avatar: "https://joesch.moe/api/v1/random",
        description: user.phone,
        content: post.body,
      };
    });
  }
  let element = iconStatus ? (
    <div className="inputComment">
      <label>Bình luận của bạn</label>
      <TextArea
        id="commentInput"
        showCount
        maxLength={100}
        style={{
          height: 120,
          resize: "none",
        }}
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        onPressEnter={(e) => {
          dispatch(
            act_patch_post(info[0].id, {
              userid: accountInfo.id,
              body: userComment,
            })
          )
          setUserComment("");
          e.preventDefault();
        }
        }
        placeholder="Viết bình luận của bạn..."
      />
    </div>
  ) : (
    <></>
  );

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return info.length > 0 ? (
    <div className="coronata">
      <div className="container">
        <div className="row d_flex grid">
          <div className="col-md-5">
            <div className="coronata_img text_align_center">
              <figure>
                <img src={postImg[info[0].image]} alt="#" />
              </figure>
            </div>
          </div>
          <div className="col-md-7 oder1">
            <div className="titlepage text_align_left">
              <h2>{info[0].title}</h2>
              <p>{info[0].subTitle}</p>
            </div>
          </div>
        </div>
        <div className="row d_flex">
          <div className="col-12 lead text-justify">{info[0].body}</div>
        </div>
      </div>
      {element}
      <div className="commentUser">
        <h3>Bình luận</h3>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <img width={272} alt="logo" src={postImg[info[0].image]} />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} size={64} />}
                title={<a href={item.href}>{item.title}</a>}
                description={`Số điện thoại: ${item.description}`}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    </div>
  ) : (
    <></>
  );
}
