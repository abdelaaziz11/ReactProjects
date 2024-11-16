import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {UsersContext} from "./UsersApp";

const UsersUpdate = (props) => {
    const context = useContext(UsersContext);
    const params = useParams()
    const name = useRef(null)
    const country = useRef(null)
    const [currentUser, setCurrentUser ] = useState([])


    const handelSabmit = (e) => {
        e.preventDefault()
        context.actions.updateUser({
            payload: {
            name: name.current.value,
            country: country.current.value,
            id: parseInt(params.id)
        }})
    }

    useEffect(() => {
        const {id} = params
        const user = context.users.filter(user => user.id === parseInt(id))
        
        if (user.length > 0) {
            setCurrentUser(...user)
        }else {
           console.error('User not found') 
        }
        
    },[])


    return (
        <>
            <form className="container mt-5" onSubmit={handelSabmit}>
                <div className="mb-3">
                    <label htmlFor="currentId" className="form-label">Current id</label>
                    <input 
                        type="text" 
                        className="form-control-plaintext" 
                        name="currentId" id="currentId"
                        aria-describedby="emailHelp" 
                        defaultValue={currentUser.id}/>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" name="name" 
                    aria-describedby="emailHelp" 
                    ref={name} defaultValue={currentUser.name}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                <select 
                    id="disabledSelect" 
                    name="disabledSelect" 
                    className="form-select" 
                    ref={country}
                    key={currentUser.country} 
                    defaultValue={currentUser.country}>
                    <option defaultValue>Select your Country</option>
                    <option value="espan">Espan</option>
                    <option value="morocco">Morocco</option>
                    <option value="french">French</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100" >Update</button>
            </form>
        </>
    );
}

export default UsersUpdate;