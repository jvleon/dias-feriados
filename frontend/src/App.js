import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Home from './containers/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import Loader from './components/Loader';

const GlobalStyle = createGlobalStyle`
  #root {
    position: relative;
  }
`;

function App() {
  return (
  <Provider store={store}>
    <Loader />
    <Home />
    <ToastContainer />
    <GlobalStyle />
  </Provider>
  );
}

export default App;
