import { SET_LOGIN_TRUE } from "./loginTypes";

const initialState = {
  isLogin: false,
};

export default function loginReducer(state = initialState, actions) {
  switch (actions.type) {
    case SET_LOGIN_TRUE:
      return {
        isLogin: true,
      };
  }
}
