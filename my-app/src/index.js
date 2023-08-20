import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home.jsx';
import UserLoginPage from './pages/UserLoginPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import TheLegendOFZeldaTotk from './pages/GameItemPages/TheLegendOfZelda-totk';
import Cart from './pages/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/UserLoginPage" element={<UserLoginPage />} />
      <Route path="/TheLegendOFZeldaTotk" element={<TheLegendOFZeldaTotk />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
