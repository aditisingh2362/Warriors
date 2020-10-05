import { createStore} from 'redux';
import loginReducer from './login/loginReducer';

const store = createStore(loginReducer);

export default store;
