import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './Component/Custom/CustomHooks/TodoList';
import UserList from './Component/Custom/CustomHooks/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList/>
    <UserList/>
  </React.StrictMode>
);
