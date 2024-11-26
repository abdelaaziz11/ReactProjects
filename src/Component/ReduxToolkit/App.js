import React from 'react';
import { store } from './Store/store';
import User from './User';
import { Provider } from 'react-redux';
import UserForm from './UserForm';

function App(props) {
    return (
        <div>
            <Provider store={store}>
                <User/>
                <UserForm/>
            </Provider>
        </div>
    );
}

export default App;