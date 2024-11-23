import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET} from './Reducers/CounterReducer';
import { counterDecrement, counterIncrement, counterReset } from './store/CounterActions';
import { counterSelector } from './store/CounterSelector';



const Counter = ({counter, increment, decrement, reset}) => {

    
    return (
        <>
        <div className={'my-5'}>
            <div className={'text-center my-2'}>{counter}</div>
            <div className="btn btn-group" role="group" aria-label="Basic example">
                <button className="btn btn-primary" type="button" onClick={decrement}>- Decrement </button>
                <button className="btn btn-primary" type="button" onClick={reset}>Reset</button>
                <button className="btn btn-primary" type="button" onClick={increment}>Increment +</button>
                
            </div>
        </div></>
    );
}

export const CounterStore = () => {
    const selector = useSelector(counterSelector)
    const dispatch = useDispatch()

    const increment = useCallback(() => dispatch(counterIncrement()))
    const decrement = useCallback(() => dispatch(counterDecrement()))
    const reset = useCallback(() => dispatch(counterReset(0))) 

    return(
        <div>
            <Counter increment={increment} decrement={decrement} reset={reset} counter={selector}/>
        </div>
    )
}

export default Counter;