import React, { useMemo, useRef, useState } from 'react';

const expensiveCalcul = (value) => {
    for(let i = 0; i < 1000; i++) {
        value++;
    }
    return value;
};

const UseMemo = () => {
    const [n, setN] = useState(0);
    const text = useRef();
    const startDate = performance.now();
    let endDate = null;

    const calculate = useMemo(() => {
        const value = expensiveCalcul(n);
        endDate = performance.now();
        console.log((endDate - startDate) + 'ms.');
        console.log(value);
        return value;
    }, [n]); // useMemo memoizes the calculated value based on 'n'

    const handleClick = () => {
        setN(parseInt(text.current.value));
    };

    return (
        <div className="container m-4">
            <input defaultValue={0} type="text" ref={text} />
            <button className="btn btn-primary" onClick={handleClick}>Re-calculate</button>
            <h1>Value : {calculate}</h1>
        </div>
    );
};

export default React.memo(UseMemo);
