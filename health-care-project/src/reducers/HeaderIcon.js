import { IS_LOGIN, IS_LOGOUT } from "../constants/userActions";

let initialState = "";

const headerIcon = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      state = action.payload;
      return state;
    case IS_LOGOUT:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default headerIcon;
