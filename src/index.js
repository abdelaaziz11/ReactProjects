import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './Component/ReduxToolkit/App';
import store from "./Component/Redux/store"
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <div className="container justify-content-center align-items-center d-flex">
        <App/>
      </div>
    </Provider>
  </>
);
