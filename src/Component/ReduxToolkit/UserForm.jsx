import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from './Store/userSelector';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UserForm() {

    const name = useRef()
    const age = useRef()
    const country = useRef()

    const user = useSelector(userSelector)

    const handleSubmit = () => {
        alert('updated')
    }
    const resetUserCallback = () => {
        alert('deleted')
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
          <Button variant="primary" onClick={handleSubmit}>
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


         {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" 
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update user</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}
                                data-bs-dismiss="modal">Update user
                        </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div> 
        </div>*/}
        </>
    );
}

export default UserForm;