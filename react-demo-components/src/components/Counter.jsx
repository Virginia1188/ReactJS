import { useState } from "react";


export default function Counter (props) {
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(count + 1);
    }

    const clearCounterHandler = () => {
        setCount(0);
    }

    return(
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={onIncrementClick}>+</button>
            <button onClick={clearCounterHandler}>Clear</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
        </div>
    )
}