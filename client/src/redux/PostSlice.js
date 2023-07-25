import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    isError: false,
  },
  reducers: {
    GetpostsStart: (state) => {
      state.isFetching = true;
    },
    GetpostsSuccess: (state, action) => {
      (state.posts = action.payload), (state.isFetching = false);
    },
    GetpostsFailure: (state) => {
      (state.isError = true), (state.isFetching = false);
    },
    CreatePostStart: (state, action) => {
      state.isFetching = true;
    },
    CreatePostSuccess: (state, action) => {
      state.isFetching = false;
      state.isError = false;
      state.posts.push(action.payload);
    },
    CreatePostFailure: (state) => {
      (state.isFetching = false), (state.isError = true);
    },
    DeletePostStart: (state) => {
      state.isFetching = true;
    },
    DeletePostSuccess: (state, action) => {
      (state.isFetching = false),
        (state.posts = state.posts.filter(
          (post) => post.post_id !== action.payload
        ));
    },
    DeletePostFailure: (state) => {
      (state.isFetching = false), (state.isError = true);
    },
  },
});

export const {
  GetpostsStart,
  GetpostsSuccess,
  GetpostsFailure,
  CreatePostStart,
  CreatePostSuccess,
  CreatePostFailure,
  DeletePostStart,
  DeletePostSuccess,
  DeletePostFailure,
} = PostSlice.actions;

export default PostSlice.reducer;
