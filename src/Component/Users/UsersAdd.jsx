import React, { useContext, useEffect, useRef } from 'react';
import {UsersContext} from "./UsersApp";


const UsersAdd = () => {
    const context = useContext(UsersContext);

    const name = useRef(null)
    const country = useRef(null)


    const handelSabmit = (e) => {
        e.preventDefault()
        context.actions.addUser( {
            payload: {
                id: context.lastId+1,
            name: name.current.value,
            country: country.current.value
        }})
        name.current.value = ''
        country.current.value = ''
    }
    return (
        <>
            <form className="container mt-5" onSubmit={handelSabmit}>
                <div className="mb-3">
                    <label htmlFor="currentId" className="form-label">Current id</label>
                    <input type="text" className="form-control-plaintext" name="currentId" id="currentId"
                     aria-describedby="emailHelp" value={context.lastId+1}/>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" ref={name}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                <select id="disabledSelect" name="disabledSelect" className="form-select" ref={country}>
                    <option defaultValue>Select your Country</option>
                    <option value="espan">Espan</option>
                    <option value="morocco">Morocco</option>
                    <option value="french">French</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100" >Save</button>
            </form>
        </>
    );
}

export default UsersAdd;