import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';

const FormValidation = () => {
    const { register, handleSubmit, reset, formState: { errors} } = useForm();
    const [show, setShow] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        country: '',
        accept: false,
    });

    // useEffect(() => {
    //     // Set default country value
    //     reset({ country: 'MA' });
    // }, [reset]);

    const onSubmit = (data) => {
        setFormValues(data);
        reset()
        setShow(true)
    };

    return (
        <>
            <div className="container my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                {show?
                    <>
                    <Alert className="mt-5" variant="success" onClose={() => setShow(false)} dismissible>
                      <p>
                        <strong>Success!</strong> Form Submited Successfully
                      </p>
                    </Alert>
                    <p></p>
                    </>
                    :
                    <p></p>
                }
                    
                    <hr />
                    <h1>Form</h1>
                    <hr/>
                    <br/>
                    
                    <div className="Input-Label">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("name", { required: true, maxLength: 25 })}
                        />
                        {errors.name && <p><small style={{color:'red'}}>Name is required</small></p>}
                        {errors.name?.type==="maxLength"&&<p><small style={{color:'red'}}>Max characters should be 25</small></p>}
                    </div>
                    <br />
                    <div className="Input-Label">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p><small style={{color:'red'}}>Email is required</small></p>}
                    </div>
                    <br />
                    <div className="Input-Label">
                        <label>Country</label>
                        <select
                            className="form-select"
                            {...register("country", { required: true })}
                        >
                            <option value="">Select your Country</option>
                            <option value="MA">Maroc</option>
                            <option value="US">United States</option>
                            <option value="EN">England</option>
                        </select>
                        {errors.country && <p><small style={{color:'red'}}>Country is required</small></p>}
                    </div>
                    <br />
                    <div className="checkBox-form">
                        <input
                            className="checkbox-input"
                            id="accept"
                            type="checkbox"
                            {...register("accept", { required: true })}
                        />
                        <label htmlFor="accept" className="checkbox-label">Accept rules</label>
                        {errors.accept && <p><small style={{color:'red'}}>Accept Conditions is required</small></p>}
                    </div>
                    <br />
                    <div className="submit-btn">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormValidation;
