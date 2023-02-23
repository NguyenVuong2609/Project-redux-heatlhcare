import { EDIT_USER, DELETE_USER, GET_DATA, CREATE_USER } from "../constants/userActions";
import * as db from "../services/createUserService";

let initialState = [];

const listUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      state = action.payload;
      return state;
    case EDIT_USER:
        db.updateUser(action.payload.id, action.payload.info);
        state = state.map(user => {
          if (user.id === action.payload.id){
            return action.payload.info;
          } else {
            return user;
          }
        })
      return state;
    case CREATE_USER:
      db.postUser(action.payload);
      state.push(action.payload);
      return state;
    case DELETE_USER:
      db.deleteUser(action.payload);
      state = state.filter(user => {
        return user.id != action.payload
      })
      return state;
    default:
      return state;
  }
};
export default listUser;
