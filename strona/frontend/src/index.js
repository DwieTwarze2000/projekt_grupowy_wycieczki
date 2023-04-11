import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponent from './app.component';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
