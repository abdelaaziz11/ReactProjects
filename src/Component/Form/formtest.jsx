import { useEffect, useReducer, useRef, useState } from "react"
import { FORM_REDUCER_DEFAULT_VALUES, formReducer } from './FormReducer.js'

const Form = () => {

    const inputNameRef = useRef()
    const inputAgeRef = useRef()
    const inputCountryRef = useRef()
    const inputAcceptRef = useRef()

    const [formValuesWithReducer, dispatch] = useReducer(formReducer, FORM_REDUCER_DEFAULT_VALUES)

    useEffect(() => {
        inputCountryRef.current.value = 'MA'
        inputNameRef.current.focus()
    },[])


    const handelSabmit = (e) => {
        e.preventDefault()

        dispatch({
            type: 'INPUT_CHANGE',
            payload: inputNameRef.current
        })

        dispatch({
            type: 'INPUT_CHANGE',
            payload: inputAgeRef.current
        })

        dispatch({
            type: 'SELECT_CHANGE',
            payload: inputCountryRef.current
        })

        dispatch({
            type: 'CHECKBOX_CHANGE',
            payload: inputAcceptRef.current
        })
    }


    return (
        <>
            <div className="container my-4">
                <form>
                    {JSON.stringify(formValuesWithReducer)}
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