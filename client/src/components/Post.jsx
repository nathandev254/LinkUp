import React, { useState } from "react";
import photo from "../assets/photo.jpg";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Comments from "./Comments";
import "./Post.css";

function Post({ post }) {
  // console.log(post);

  const {comments} = useSelector((state) => state.comment)
  // console.log(comments)

  const [Commentstate, setCommentstate] = useState(false);

  const HandleCommentShow = () => {
    setCommentstate(!Commentstate);
  };

  return (
    <div className="post--container">
      <div className="post--top">
        <div className="top--left">
          <img src={photo} alt="" />
          <span>{post.username}</span>
        </div>
        <div className="top--right">
          <FiMoreHorizontal />
        </div>
      </div>
      <div className="post--content">
        <p className="post--text">{post.description}</p>
        {/* <img src={photo} alt="image" /> */}
      </div>
      <div className="post--footer">
        <div className="post--footer_left">
          <AiOutlineHeart />
          <BiSolidCommentDetail onClick={HandleCommentShow} />
        </div>
        <div className="post--footer_right">
          <BsFillBookmarkFill />
        </div>
      </div>
      {Commentstate && <Comments post_id={post.post_id} comments={comments} /> }
    </div>
  );
}

export default Post;
