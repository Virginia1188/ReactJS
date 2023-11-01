
import { useState } from 'react';

export default function Timer(props) {

    const [time, setTime] = useState(props.startTime);

    setTimeout(() => {
        setTime(time + 1);
       
    }, 1000);

    return (
        <div>
            <h2>Timer</h2>
            <p>{time} seconds</p>
        </div>


    );
}