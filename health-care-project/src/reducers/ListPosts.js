import {
  GET_POST_DATA,
  POST_NEW_POST,
  EDIT_POST,
  DELETE_POST,
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
      state.push({ ...action.payload, id: id , key: id });
      return state;
    default:
      return state;
  }
};
export default listPosts;
