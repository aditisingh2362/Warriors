import { SET_LOGIN_TRUE, SET_LOGIN_FALSE } from './loginTypes';

export const setLoginTrue = ({ email, fullName }) => {
  return {
    type: SET_LOGIN_TRUE,
    payload: { email, fullName }
  };
};

export const setLoginFalse = () => {
  return {
    type: SET_LOGIN_FALSE
  };
};
