import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './Component/ReduxToolkit/App';
import store from "./Component/Redux/store"
import {Provider} from 'react-redux'
import WithCounter from './Component/Hoc/WithCounter';
import CounterClick from './Component/Hoc/CounterClick';
import CounterHover from './Component/Hoc/CounterHover';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
        <CounterClick/>
        <CounterHover title={'counter'}  />
    </Provider>
  </>
);
