import React, { useState } from 'react';
import UsersTable from './UsersTable';

const INITIAL_DATA = [
    {
        id: 1,
        name: 'Abdelaaziz',
        country: 'Morocco'
    },
    {
        id: 2,
        name: 'Khouda',
        country: 'French'
    }
]

const UsersApp = () => {
    const [users, setUsers] = useState(INITIAL_DATA)
    return (
            <UsersTable users={users}/>
    );
}

export default UsersApp;