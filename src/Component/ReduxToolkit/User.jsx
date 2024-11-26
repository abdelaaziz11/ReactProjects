import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from './Store/userSelector';
import UserForm from './UserForm';

function User() {
    const user = useSelector(userSelector)


    return (
        <div className="px-4 pt-5 my-5 text-center border-botton">
            <h1 className="display-4 fw-bold">{user.name} ({user.age} years)</h1>
            <div className="mx-auto">
                <p className="lead mb-4">
                    <img src={`https://flagcdn.com/48x36/${user.country}.png`} alt="image"/>
                </p>
            </div>
        </div>
    );
}

export default User;