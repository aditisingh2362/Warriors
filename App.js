import React from 'react';
import { Provider } from 'react-redux';
import AuthFlow from './AuthFlow';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AuthFlow />
    </Provider>
  );
}
