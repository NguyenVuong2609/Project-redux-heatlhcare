import { combineReducers } from 'redux';
import userViewData from "./UserView"
import listUser from "./ListUser";
import listPosts from './ListPosts';
import userPostData from './PostView';

const reducer = combineReducers({userViewData, listUser, listPosts, userPostData});
export default reducer;