import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from './router';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ToastContainer 
    position={"bottom-center"}
    autoClose={1000} 
    hideProgressBar/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
