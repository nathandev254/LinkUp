import React from "react";
import photo from "../assets/photo.jpg";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import "./Post.css";

function Post() {
  return (
    <div className="post--container">
      <div className="post--top">
        <div className="top--left">
          <img src={photo} alt="" />
          <span>Nathaniel</span>
        </div>
        <div className="top--right">
          <FiMoreHorizontal />
        </div>
      </div>
      <div className="post--content">
        <p className="post--text">Things that make me work hard as a man</p>
        <img src={photo} alt="image" />
      </div>
      <div className="post--footer">
        <div className="post--footer_left">
          <AiOutlineHeart />
          <BiSolidCommentDetail />
        </div>
        <div className="post--footer_right">
          <BsFillBookmarkFill />
        </div>
      </div>
    </div>
  );
}

export default Post;
