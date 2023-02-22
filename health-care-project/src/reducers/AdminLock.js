import { ADMIN_LOGIN, ADMIN_LOGOUT } from "../constants/userActions";

let initialState = false;

const adminLock = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      state = true;
      return state;
    case ADMIN_LOGOUT:
      state = false;
      return state;
    default:
      return state;
  }
};
export default adminLock;
