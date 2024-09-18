import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function Data(props) {

    const [data, setData] = React.useState(null)
    const [randomHero, setRandomHero] = React.useState(null)

    React.useEffect(() => {
        fetch('https://api.opendota.com/api/heroStats')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [1])

    const generateRandomHero = () => {
        const randomHeroId = Math.floor(Math.random() * data.length) + 1;
        setRandomHero(randomHeroId);
        console.log(data)
        console.log(randomHero)
        console.log(randomHeroId)
    }
    return (
        <div>
            <button onClick={generateRandomHero}>generate Random Hero</button>
            {randomHero != null && <div>
                <h2>{data[randomHero].localized_name}</h2>
                <p>{data[randomHero].primary_attr}</p>
                <p>{data[randomHero].attack_type}</p>
                <div>
                    {data[randomHero].roles.map((role, index) => (
                        <p key={index}>{role}</p>
                    ))}
                </div>
            </div>}
        </div>
    )
}
