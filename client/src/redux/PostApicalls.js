import axios from "axios";
import {
  CreatePostFailure,
  CreatePostStart,
  CreatePostSuccess,
  GetpostsFailure,
  GetpostsStart,
  GetpostsSuccess,
} from "./PostSlice";

export const GetPosts = (dispatch) => {
  dispatch(GetpostsStart());

  axios
    .get("http://localhost:8081/post")
    .then(({ data }) => {
      //   console.log(data);
      dispatch(GetpostsSuccess(data));
    })
    .catch((error) => {
      //   console.error( error);
      dispatch(GetpostsFailure());
    });
};

export const CreatePost = (dispatch, post) => {
  dispatch(CreatePostStart());
//   console.log(post);
  const {user_id} = post
  axios
    .post(`http://localhost:8081/post/${user_id}`, post)
    .then(({data}) => {
      console.log(data);
        // dispatch(CreatePostSuccess())
    })
    .catch((error) => {
      console.error(error);
        dispatch(CreatePostFailure())
    });
};
