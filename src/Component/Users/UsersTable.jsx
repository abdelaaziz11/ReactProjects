import React, { useContext } from 'react';
import {UsersContext} from "./UsersApp";
import {BrowserRouter, Outlet, Link, Route, Routes} from 'react-router-dom';

const UsersTable =({})=> {
    const context = useContext(UsersContext);

    return (
        <div className="container">
            <h1 className="mt-5">Users</h1>

            <table className="table table-striped">
            <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (context.users.length > 0) ? context.users.map((user, key) => 
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.country}</td>
                            <td>
                                <Link to={`/user/${user.id}/edit`} className={'btn btn-primary mx-1'}>Update</Link>
                                <Link to={`/user/${user.id}/edit`} className={'btn btn-danger'}>Delete</Link>
                            </td>
                        </tr>) 
                        : <tr><td colSpan={4} align={'center'}> No Items</td></tr>
                   }
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;