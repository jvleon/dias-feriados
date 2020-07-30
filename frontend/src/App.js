import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Home from './containers/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <Provider store={store}>
    <Home />
    <ToastContainer />
  </Provider>
  );
}

export default App;
