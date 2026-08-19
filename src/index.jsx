import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Routes } from './App';
import { RouterProvider } from 'react-router-dom';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: "GTM-NP66W5LK", // Replace with your GTM ID
};

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes}>
    <App />
    </RouterProvider>
  </React.StrictMode>

);
