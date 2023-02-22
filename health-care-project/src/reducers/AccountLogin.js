import { NEW_USER_LOGIN, USER_LOGIN } from "../constants/userActions";

let initialState = "";

const accountLogin = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
        state = action.payload;
      return state;
      case NEW_USER_LOGIN:
        state = action.payload;
    default:
      return state;
  }
};
export default accountLogin;