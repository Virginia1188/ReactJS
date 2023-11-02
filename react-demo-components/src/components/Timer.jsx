
import { useState, useEffect } from 'react';
import styles from './Timer.module.css'

export default function Timer(props) {

    const [time, setTime] = useState(props.startTime);

    useEffect(() => {
        setTimeout(() => setTime(t => t + 1), 1000);
    }, [time])


    return (
        <div className={styles.timer}>
            <h2>Timer</h2>
            <p>{time} seconds</p>
        </div>
    );
}