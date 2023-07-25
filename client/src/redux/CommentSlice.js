import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    GetCommentStart: (state) => {
      state.isFetching = true;
    },
    GetCommentSuccess: (state, action) => {
      (state.comments = action.payload), (state.isFetching = false);
    },
    GetCommentFailure: (state) => {
      (state.isError = true), (state.isFetching = false);
    },
    CreateCommentStart: (state, action) => {
      state.isFetching = true;
    },
    CreateCommentSuccess: (state, action) => {
      state.isFetching = false;
      state.isError = false;
      state.comments.push(action.payload);
    },
    CreateCommentFailure: (state) => {
      (state.isFetching = false), (state.isError = true);
    },
  },
});

export const {
  GetCommentStart,
  GetCommentSuccess,
  GetCommentFailure,
  CreateCommentStart,
  CreateCommentSuccess,
  CreateCommentFailure
} = CommentSlice.actions;

export default CommentSlice.reducer