import { combineReducers } from "redux";
import userViewData from "./UserView";
import listUser from "./ListUser";
import listPosts from "./ListPosts";
import userPostData from "./PostView";
import adminLock from "./AdminLock";
import headerIcon from "./HeaderIcon";
import accountLogin from "./AccountLogin";

const reducer = combineReducers({
  userViewData,
  listUser,
  listPosts,
  userPostData,
  adminLock,
  headerIcon,
  accountLogin
});
export default reducer;
