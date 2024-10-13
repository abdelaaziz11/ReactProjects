import { useEffect, useRef, useState } from "react"

const Form = () => {

    const inputNameRef = useRef()
    const inputAgeRef = useRef()
    const inputCountryRef = useRef()
    const inputAcceptRef = useRef()


    const [formValues, setFormValues] = useState({
        name:'undefined',
        age: 'undefined',
        country: 'undefined',
        accept: false,
    })

    useEffect(() => {
        inputCountryRef.current.value = 'MA'
        inputNameRef.current.focus()
    },[])


    const handelSabmit = (e) => {
        e.preventDefault()
        setFormValues({
            name: inputNameRef.current.value,
            age: inputAgeRef.current.value,
            country: inputCountryRef.current.value,
            accept: inputAcceptRef.current.checked,
        })
    }


    return (
        <>
            <div className="container my-4">
                <form>
                    {JSON.stringify(formValues)}
                    <hr/>
                    
                    <div className="Input-Label">
                        <label>Name</label>
                       
                        <input type="text" className="form-control" id="name" ref={inputNameRef} /> 
                    </div>
                    <br/>
                    <div className="Input-Label">
                        <label>Age</label>
                        
                        <input type="number" className="form-control" id="age" ref={inputAgeRef}/> 
                    </div>
                    <br/>
                    <div className="Input-Label">
                        <label>Country</label>
                        <select className="form-select" id="country" ref={inputCountryRef}>
                          <option defaultValue>Select your Country</option>
                          <option value="MA">Maroc</option>
                          <option value="US">United State</option>
                          <option value="EN">England</option>
                        </select>
                    </div>
                    <br/>
                    <div className="checkBock-form">
                        <input className="checkbox-input" id="accept" type="checkbox" ref={inputAcceptRef} />
                        <label htmlFor="accept" className="checkbox-label">Accept rules</label>
                    </div>
                    <br/>
                    <div className="sebmit-btn">
                        <button onClick={handelSabmit} className="btn btn-primary" >Save</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}
export default Form;