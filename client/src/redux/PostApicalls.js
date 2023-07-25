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
  try {
    dispatch(CreatePostStart());
    console.log(post);
    const { user_id } = post;
    const {data} =   axios.post(`http://localhost:8081/post/${user_id}`, post)
    console.log(data);
    dispatch(CreatePostSuccess(post));
  } catch (err) {
    console.log(err);
    dispatch(CreatePostFailure());
  }

  // axios
  //   .post(`http://localhost:8081/post/${user_id}`, post)
  //   .then(response => {
  //     // console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //       dispatch(CreatePostFailure())
  //   });
};
