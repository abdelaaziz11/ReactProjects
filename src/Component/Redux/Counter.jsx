import React from 'react';
import { connect } from 'react-redux';
import {COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET} from './Reducers/CounterReducer';



const Counter = ({counter, onIecrement, onDecrement, onReset}) => {

    const increment = () => onIecrement()
    const decrement = () => onDecrement()
    const reset = () => {onReset(0)}
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

export const CounterStore = connect(
    (state) => ({
        counter: state.value
    }),dispatch => ({
        onIecrement: value => dispatch({
            type: COUNTER_INCREMENT
        }),
        onDecrement: value => dispatch({
            type: COUNTER_DECREMENT
        }),
        onReset: value => dispatch({
            type: COUNTER_RESET,
            payload: {value}
        })
    })
)(Counter)

export default Counter;