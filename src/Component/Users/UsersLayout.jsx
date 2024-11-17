import React from 'react';
import {BrowserRouter, Outlet, Link, Route, Routes} from 'react-router-dom';
import UsersAdd from './UsersAdd';
import UsersUpdate from './UsersUpdate';
import UsersTable from './UsersTable';
import UsersDelete from './UsersDelete';

const UsersLayout = () => {
    return (
        <>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to={'/'}>Users list</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/user/create'}>Add User</Link>
                
                </li>
            </ul>
            </nav>

            <Routes>
                <Route index element={<UsersTable/>}/>
                <Route path={'user/create'} element={<UsersAdd/>}/>
                <Route path={'user/:id/edit'} element={<UsersUpdate/>}/>
                <Route path={'user/:id/delete'} element={<UsersDelete/>}/>
            </Routes>
        </BrowserRouter>
        <Outlet/>
        </>
    );
}

export default UsersLayout;