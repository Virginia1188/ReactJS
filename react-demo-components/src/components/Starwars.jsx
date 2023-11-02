import { useEffect, useState } from "react";

export default function Starwars(props) {

    const [char, setChar] = useState([]);
    console.log(char);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then((res) => res.json())
            .then((data) => {
                setChar(data.results);

            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h2>SW Characters</h2>
            <ul>
                {char.map(c => <li key={c.url}>{c.name}</li>)}
            </ul>
        </div>

    )
}