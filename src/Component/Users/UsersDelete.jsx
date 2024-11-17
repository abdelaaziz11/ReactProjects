import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {UsersContext} from "./UsersApp";


const UsersDelete = () => {
    const context = useContext(UsersContext);
    const params = useParams()

    const handelDelate = (e) => {
        e.preventDefault()
        context.actions.deleteUser( {
            payload: {
                id: parseInt(params.id)
        }})
    }
    return (
        <>
            <div className="container">
                <h2 className="mt-5">Do you want to DELETE this user</h2>
                
                <div class="alert alert-danger" role="alert">
                    <strong>danger</strong> Deletion is irreversible!
                </div>
                
                <button type="submit" className="btn btn-primary btn-danger" onClick={handelDelate}>DELETE</button>
            </div>
        </>
    );
}

export default UsersDelete;