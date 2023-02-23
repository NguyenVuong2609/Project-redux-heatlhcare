import {
  GET_POST_DATA,
  POST_NEW_POST,
  EDIT_POST,
  DELETE_POST,
  PATCH_POST,
} from "../constants/userActions";
import * as db from "../services/postService";

let initialState = [];
const listPosts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA:
      return (state = action.payload);
    case POST_NEW_POST:
      let id = state.length == 0 ? 1 : state[state.length - 1].id + 1;
      db.postNewPost({ ...action.payload, id: id, key: id });
      state.push({ ...action.payload, id: id, key: id });
      return state;
    case EDIT_POST:
      db.updatePost(action.payload.id, action.payload.info);
      state = state.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload.info;
        } else {
          return post;
        }
      });
      return state;
    case DELETE_POST:
      db.deletePost(action.payload);
      state = state.filter((post) => {
        return post.id != action.payload;
      });
      return state;
    case PATCH_POST:
      state = state.map((post) => {
        if (post.id === action.payload.id) {
          post.comment.push(action.payload.info);
          db.patchPost(action.payload.id, {comment: post.comment});
          return {...post}
        } else {
          return post;
        }
      });
      console.log(action.payload.info);
      console.log(state);
     
      return state;
    default:
      return state;
  }
};
export default listPosts;
