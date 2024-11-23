export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET = 'counter/reset';

export const CounterReducer = (state = {value: 0}, action) => {
    
    switch (action.type) {
        case COUNTER_INCREMENT : return { value: state.value + 1 }
        case COUNTER_DECREMENT : return { value: state.value - 1 }
        case COUNTER_RESET : return { value: action.payload.value }
        default:
            return state
    }
}
