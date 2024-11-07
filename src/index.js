import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseMemo from './Component/UseMemo/UseMemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseMemo/>
  </React.StrictMode>
);
