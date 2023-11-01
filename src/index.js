import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCPp1cdfqJUOKmu9TC5B-U6vX4IydfppHk",
  authDomain: "ecommerce-react-c1b13.firebaseapp.com",
  projectId: "ecommerce-react-c1b13",
  storageBucket: "ecommerce-react-c1b13.appspot.com",
  messagingSenderId: "296523590730",
  appId: "1:296523590730:web:a491fc369e98292b528ab3"
};
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
