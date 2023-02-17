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
    default:
      return state;
  }
};
export default listPosts;
