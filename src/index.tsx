import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
      `}
    />
    <Normalize />
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
