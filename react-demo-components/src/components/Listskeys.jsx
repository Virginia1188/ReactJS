import { useState } from "react";

export default function ListsKeys() {

    const [numbers, setNumbers] = useState([1,2,3,4,5]);

    const onClick = () => {
        setNumbers(oldState => oldState.slice(1));
    }

    return(
        <div className="lists-keys">
            <ul>
                {numbers.map((number,index) => <li data-key={index} key={index}>{number * 2}</li>)}
            </ul>

        <button onClick={onClick}>Remove</button>
        </div>
    )
}