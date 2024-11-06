import React, { useCallback } from 'react';

const UseCallBack = () => {
    let a = 12;
    let b = 18;

    const handleClick = useCallback(() => {
        let result = a + b
        console.log(result);
        return result;
    }, [a, b]);

    return (
        <div className="container m-4">
            <h4>Click on this button to calcule</h4>
            <button className="btn btn-primary" onClick={handleClick}>Calculate</button>
            <ul>
            <li>{handleClick()}</li>
            </ul>
        </div>
    );
}

export default UseCallBack;
