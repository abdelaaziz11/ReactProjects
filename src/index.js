import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Rooters from './Component/Routers/Routes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rooters/>
  </React.StrictMode>
);
