import { SET_LOGIN_TRUE, SET_LOGIN_FALSE } from './loginTypes';

const initialState = {
  isLogin: false,
  fullName: '',
  email: ''
};

export default function loginReducer(state = initialState, actions) {
  switch (actions.type) {
    case SET_LOGIN_TRUE:
      console.log(actions.payload.email, actions.payload.fullName);
      return {
        isLogin: true,
        email: actions.payload.email,
        fullName: actions.payload.fullName
      };
    case SET_LOGIN_FALSE:
      return {
        isLogin: false
      };
    default:
      return state;
  }
}
