import axios from "axios";
import {
  CreateCommentFailure,
  CreateCommentStart,
  CreateCommentSuccess,
  GetCommentFailure,
  GetCommentStart,
  GetCommentSuccess,
} from "./CommentSlice";

export const GetComments = async (dispatch, post_id) => {
  dispatch(GetCommentStart());
  // console.log(post_id)
  try {
    const { data } = await axios.get(
      `http://localhost:8081/comment/${post_id}`
    );
    // console.log(data)
    dispatch(GetCommentSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(GetCommentFailure());
  }
};

export const CreateComment = async (dispatch, Commentdata) => {
  const { post_id } = Commentdata;
  // console.log(Commentdata);

  dispatch(CreateCommentStart());
  try {
    const { data } = await axios.post(
      `http://localhost:8081/comment/${post_id}`,
      Commentdata
    );
    console.log({ data });
    dispatch(CreateCommentSuccess(Commentdata));
  } catch (error) {
    console.log(error);
    dispatch(CreateCommentFailure());
  }
};
