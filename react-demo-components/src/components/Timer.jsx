
import { useState, useEffect } from 'react';

export default function Timer(props) {

    const [time, setTime] = useState(props.startTime);

    useEffect(() => {
        setTimeout(() => setTime(t => t + 1), 1000);
    }, [time])


    return (
        <div>
            <h2>Timer</h2>
            <p>{time} seconds</p>
        </div>
    );
}