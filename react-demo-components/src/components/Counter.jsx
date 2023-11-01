import { useState } from "react";


export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(count + 1);
    }

    const clearCounterHandler = () => {
        setCount(0);
    }

    // if(count < 0) {
    //     return(
    //         <h3>Invalid Count!</h3>
    //     )
    // }


    // let warning = null;
    // if(count < 0 ){
    //     warning = <p>Invalid Count!</p>
    // }

    let message = null;

    switch (count) {
        case 1:
            message = 'First Kill'
            break;
        case 2:
            message = 'Double Kill'
            break;
        case 3:
            message = 'Multi Kill'
            break;
        case 4:
            message = 'God like'
            break;
        default:
            message = 'Monster Kill'
            break;
    }

    return (
        <div>
            <h2>Counter</h2>

            {count < 0
                ? <p>Invalid Count!</p>
                : null
            }

            {count == 0 && <p>Please start incrementing</p>}
            <h4>{message}</h4>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    )
}