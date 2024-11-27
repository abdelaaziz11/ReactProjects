import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from './Store/userSelector';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {updateUser,resetUser} from './Features/userSlice.js'

function UserForm() {

    const name = useRef()
    const age = useRef()
    const country = useRef()
    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const handleSubmit = () => {
        dispatch(updateUser({
            name: name.current.value,
            country: country.current.value,
            age: age.current.value
        }))

        setShow(false);
    }
    const resetUserCallback = (e) => {
        e.preventDefault()
        dispatch(resetUser())
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="mb-3 row">
                            <label htmlFor="fullName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="fullName" name="fullName"
                           defaultValue={user?.name} ref={name}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="age" name="age"
                           defaultValue={user?.age} ref={age}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                <div className="col-sm-10">
                    <select id='country' name='country' className="form-select" ref={country}
                            defaultValue={user?.country}>
                        <option value=''>Select your country</option>
                        <option value="ma">Morocco</option>
                        <option value="dz">Algeria</option>
                        <option value="tn">Tunisia</option>
                    </select>
                </div>
            </div>
        </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" data-bs-dismiss="modal" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="container">
            <div className="d-grid gap-2 d-flex justify-content-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" data-toggle="modal" data-target="#exampleModalLong" onClick={handleShow}>Update your profile
                </button>
                <button type="button" className="btn btn-outline-danger btn-lg px-4" onClick={resetUserCallback}>Delete
                    Your profile
                </button>
            </div>
        </div>


        </>
    );
}

export default UserForm;