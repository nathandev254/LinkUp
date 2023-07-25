import axios from "axios";
import { GetCommentStart } from "./CommentSlice";

export const GetComments = async (dispatch,) => {
  dispatch(GetCommentStart());
  try {
    const response = await axios.get('http://localhost:8081/comment');
    console.log(response)
  } catch (error) {
    console.log(error)
  }
};

export const CreateComment = () => {};
