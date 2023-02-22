import {
  EDIT_USER,
  VIEW_USER,
  DELETE_USER,
  GET_DATA,
  GET_DATA_BANNED,
  GET_POST_DATA,
  POST_NEW_POST,
  DELETE_POST,
  VIEW_POST,
  EDIT_POST,
  CREATE_USER,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  IS_LOGIN,
  IS_LOGOUT,
  USER_LOGIN,
  NEW_USER_LOGIN,
} from "../constants/userActions";

export const act_view_user = (data, status) => {
  return {
    type: VIEW_USER,
    payload: { data, status },
  };
};
export const act_delete_user = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const act_get_data = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
export const act_edit_user = (id, info) => {
  return {
    type: EDIT_USER,
    payload: { id, info },
  };
};
export const act_get_banned_data = (data) => {
  return {
    type: GET_DATA_BANNED,
    payload: data,
  };
};
export const act_get_post_data = (data) => {
  return {
    type: GET_POST_DATA,
    payload: data,
  };
};
export const act_add_new_post = (data) => {
  return {
    type: POST_NEW_POST,
    payload: data,
  };
};
export const act_delete_post = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};
export const act_view_post = (data, status) => {
  return {
    type: VIEW_POST,
    payload: { data, status },
  };
};
export const act_edit_post = (id, info) => {
  return {
    type: EDIT_POST,
    payload: { id, info },
  };
};
export const act_create_user = (user) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};
export const act_open_admin = () => {
  return {
    type: ADMIN_LOGIN,
  };
};
export const act_close_admin = () => {
  return {
    type: ADMIN_LOGOUT,
  };
};
export const act_login = (status) => {
  return {
    type: IS_LOGIN,
    payload: status,
  };
};
export const act_logout = (status) => {
  return {
    type: IS_LOGOUT,
    payload: status,
  };
};
export const act_user_login = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};
export const act_edit_user_login = (user) => {
  return {
    type: NEW_USER_LOGIN,
    payload: user
  }
}
