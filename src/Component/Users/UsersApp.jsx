import React, { createContext, useState } from 'react';
import UsersTable from './UsersTable';
import UsersAdd from './UsersAdd';
import UsersLayout from './UsersLayout';

export const UsersContext = createContext({
    users: [],
    lastId: 0,
    onAddUser: () => null,
    updateUser: () => null,
    deleteUser: () => null
})

const UsersApp = () => {
    const [users, setUsers] = useState([])
    const [lastId, setLastId] = useState(0)

    const addUser = (data) => {
        setUsers(prevState => [...prevState, data.payload])
        setLastId(prevState => prevState+1)
        window.history.back()
    }
    const updateUser = (data) => {
        const {id, ...rest} = data.payload
        setUsers(prevState => prevState.map(user => {
                if (user.id === id) {
                    return { id: user.id, ...rest}
                }
                return user
            })
        )
    }
    const deleteUser = (data) => {
        setUsers(prevState => prevState.filter(user => user.id === data.payload.id))
        window.history.back()
    }
    return (
        <>
        <UsersContext.Provider value={{
            users: users,
            lastId: lastId,
            actions :{
                addUser,
                updateUser,
                deleteUser
            }
        }}>
            
            <UsersLayout/>
        </UsersContext.Provider>
        </>
    );
}

export default UsersApp;