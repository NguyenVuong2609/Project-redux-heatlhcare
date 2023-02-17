import { VIEW_USER } from "../constants/userActions";

let initialState = "";

const userViewData = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_USER:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default userViewData;
