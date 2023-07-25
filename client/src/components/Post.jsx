import React, { useState } from "react";
import photo from "../assets/photo.jpg";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import {useDispatch,useSelector} from 'react-redux'
import { GetComments } from "../redux/CommentApicalls";
import "./Post.css";

function Post({post,onClick}) {
  // console.log(post)
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const {posts} = useSelector(state => state.post)
  console.log(posts)

  const [Commentstate, setCommentstate] = useState(false);

  const HandleCommentShow = () => {
    setCommentstate(!Commentstate)
    GetComments(dispatch)
    onClick
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
          <BsFillBookmarkFill  />
        </div>
      </div>

      {/* {Commentstate && (
        <div className="post--comments">
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <span className="comment--user">{comment.user}: </span>
              <span className="comment--text">{comment.comment}</span>
            </div>
          ))}
          <div className="comment--input">
            <input type="text" placeholder="Add a comment..." />
            <button className="comment-btn">Add</button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Post;
