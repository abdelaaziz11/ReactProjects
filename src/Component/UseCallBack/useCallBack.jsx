import React from 'react';

const useCallBack = () => {

    let a = 12
    let b = 18
    const handelClick = () => {
        let result = a + b
        console.log(result)
        return result
    }

    return (
        <div>
            <h1>Memoized UseCallBack Fonction</h1>
            <button className="btn btn-primary" onClick={handelClick}>Click here</button>
        </div>
    );
}

export default useCallBack;