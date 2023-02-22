import { VIEW_POST } from "../constants/userActions";

let initialState = "";

const userPostData = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_POST:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default userPostData;
