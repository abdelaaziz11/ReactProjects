import React from 'react';


function UsersTable({users}) {
    return (
        <div className="container">
            <h1 className="mt-5">Users</h1>

            <table className="table table-striped">
            <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (users.length > 0) ? users.map((user, key) => 
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.country}</td>
                        </tr>) 
                        : <tr><td colSpan={3} align={'center'}> No Items</td></tr>
                   }
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;