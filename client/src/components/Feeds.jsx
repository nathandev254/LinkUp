import React, { useEffect, useState } from "react";
import { BsCardImage, BsFillCameraVideoFill } from "react-icons/bs";
import { BiSolidMicrophone } from "react-icons/bi";
import Post from "./Post";
import { CreatePost, GetPosts } from "../redux/PostApicalls";
import { useDispatch, useSelector } from "react-redux";
import "./Feeds.css";

function Feeds() {
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { user_id,username } = useSelector((state) => state.user?.user);

  // console.log(user_id)

  const post = {
    description,
    user_id,
  };

  useEffect(() => {
    GetPosts(dispatch);
  }, []);

  const handlePost = () => {
    // console.log(description)
    CreatePost(dispatch, post);
  };

  const handlePostClick = () =>{
    console.log('clicked')
  }

  return (
    <div className="feeds" >
      <div className="feeds--post">
        <div className="feed--input">
          <textarea
            onChange={(e) => setdescription(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="whats on your mind"
          ></textarea>
          <div className="feeds--icons">
            <BsCardImage />
            <BsFillCameraVideoFill />
            <BiSolidMicrophone />
          </div>
        </div>
        <button onClick={handlePost} className="button--post">
          Post
        </button>
      </div>
      {posts?.map((post) => {
        return (
          <div key={post?.post_id}>
            <Post post={post} onPostClick={handlePostClick}/>
          </div>
        );
      })}
    </div>
  );
}

export default Feeds;
