import React, {useCallback, useEffect} from 'react';

function Maths() {
    const x = 12
    const y = 13
    // memoized function
    const handleClick = useCallback(() => {
        console.log(x+y)
        return x+y
    },[x,y])

    return (
        <div>
            <button className="btn-primary btn" onClick={handleClick}>Calculate</button>
        </div>
    );
}

export default Maths;