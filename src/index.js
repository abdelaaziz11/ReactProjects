import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UsersApp from './Component/Users/UsersApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersApp/>
  </React.StrictMode>
);
