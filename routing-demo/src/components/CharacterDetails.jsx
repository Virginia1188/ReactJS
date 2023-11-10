import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
    // const name = 'some'
    const { id } = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(setCharacter)
    }, [id])
    return (
        <>
            <h1>{character.name}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quod doloribus ex inventore corrupti repellat ipsam repellendus rerum quibusdam iure.</p>
        </>
    );
}