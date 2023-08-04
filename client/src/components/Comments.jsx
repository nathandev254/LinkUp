import React, { useEffect, useState } from "react";
import "./Comment.css";
import { GetComments } from "../redux/CommentApicalls";
import { useDispatch, useSelector } from "react-redux";
import { CreateComment } from "../redux/CommentApicalls";

function Comments({ post_id, comments }) {
  const [description, setdescription] = useState("");
  const { user_id } = useSelector((state) => state.user?.user);

  // console.log(comments);

  const dispatch = useDispatch();

  const Commentdata = { post_id, description, user_id };

  const handlePostComment = () => {
    CreateComment(dispatch, Commentdata);
    setdescription('')
  };

  useEffect(() => {
    GetComments(dispatch, post_id);
  }, []);

  return (
    <div className="post--comments">
      {comments?.map((comment,index) => {
        return (
          <div key={index} className="comment">
            <span className="comment--user">Nathan</span>
            <span className="comment--text">{comment?.description}</span>
          </div>
        );
      })}
      <div className="comment--input">
        <input
          type="text"
          placeholder="Add a comment..."
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button onClick={handlePostComment} className="comment-btn">
          Add
        </button>
      </div>
    </div>
  );
}

export default Comments;
