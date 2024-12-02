import React, { useState } from 'react';
import CounterClick from './CounterClick';
import CounterHover from './CounterHover';

export default function WithCounter(OriginalComponent) {
    const NewComponent = (props) => {
        const [count, setCount] = useState(0)

        const NewProps = {
            count,
            title:'Click',
            color: 'bg-dark',
            ...props
        }
        const increment = () => {
            setCount(prevState => {
                return prevState + 1
            })
        }
        return (
            <>
                <OriginalComponent increment={increment} {...NewProps}/>
            </>
        );
    }
    return NewComponent;
}