import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NextUIProvider>
      <App />
    </NextUIProvider>
    <Toaster />
  </BrowserRouter>
);
reportWebVitals();
