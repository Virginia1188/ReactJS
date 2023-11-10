import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CharacterDetails() {
    
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if(!res.ok){
                    throw new Error('Not found')
                }
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/characters');
            })
    }, [id])
    return (
        <>
            <h1>{character.name}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quod doloribus ex inventore corrupti repellat ipsam repellendus rerum quibusdam iure.</p>
        </>
    );
}