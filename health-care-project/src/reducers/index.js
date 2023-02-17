import { combineReducers } from 'redux';
import userViewData from "./UserView"
import listUser from "./ListUser";
import listPosts from './ListPosts';

const reducer = combineReducers({userViewData, listUser, listPosts});
export default reducer;