import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import syyle from './generate.css'

import Melee from '../../images/melee.svg'
import Ranged from '../../images/ranged.svg'

import Agility from '../../images/hero_agility.png'
import Intelligence from '../../images/hero_intelligence.png'
import Strength from '../../images/hero_strength.png'
import Universal from '../../images/hero_universal.png'

import Carry from '../../images/carry_icon.webp'
import Support from '../../images/support_icon.webp'
import Nuker from '../../images/nuker_icon.webp'
import Disabler from '../../images/disabler_icon.webp'
import Durable from '../../images/durable_icon.webp'
import Escape from '../../images/escape_icon.webp'
import Pusher from '../../images/pusher_icon.webp'
import Initiator from '../../images/initiator_icon.webp'

const attrImg = {
    'agi': Agility,
    'all': Universal,
    'str': Strength,
    'int': Intelligence
}
const attrTitle = {
    'agi': 'Agility',
    'all': 'Universal',
    'str': 'Strength',
    'int': 'Intelligence'
}

const rolesImg = {
    'Carry': Carry,
    'Support': Support,
    'Disabler': Disabler,
    'Durable': Durable,
    'Escape': Escape,
    'Initiator': Initiator,
    'Nuker': Nuker,
    'Pusher': Pusher,
}
const rolesTitle = {
    'Carry': 'Carry',
    'Support': 'Support',
    'Disabler': 'Disabler',
    'Durable': 'Durable',
    'Escape': 'Escape',
    'Initiator': 'Initiator',
    'Nuker': 'Nuker',
    'Pusher': 'Pusher',
}
export default function Data({ attackType, attr, mainRole, role }) {

    const [data, setData] = React.useState(null)
    const [randomHero, setRandomHero] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.opendota.com/api/heroStats');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Fetch operation error:', error);
            }
        };

        fetchData();
    }, []);



    const generateRandomHero = () => {

        let filteredData = data;
        if (attackType != null) {
            filteredData = filteredData.filter((item) => item.attack_type == attackType)
        }
        if (attr != null) {
            filteredData = filteredData.filter((item) => item.primary_attr == attr)
        }
        if (mainRole != null) {
            filteredData = filteredData.filter((item) => item.roles.includes(mainRole))
        }
        if (role.length > 0) {
            filteredData = filteredData.filter((item) => role.every((r) => item.roles.includes(r)))
        }
        if (filteredData.length == 0) {
            setRandomHero(undefined)
        }
        else {
            setRandomHero(filteredData[Math.floor(Math.random() * filteredData.length)])
        }
        console.log(mainRole)
console.log(filteredData)
    }
    return (
        <div className='generate'>
            <button onClick={generateRandomHero} className='generateButton'>Generate Random Hero</button>
            {randomHero === undefined &&
                <div className='errorMessage'>
                    <p className='errorMessageParagraph'>
                        The hero you are looking for does not exist
                    </p>
                </div>
            }
            {randomHero != null && <div>
                <div className='generateInner'>
                    <div className='generatedHero'>
                        <div className='generatedHeroTitle'>
                            <h2>{randomHero.localized_name}</h2>
                            <img src={"https://cdn.cloudflare.steamstatic.com/" + randomHero.icon}></img>
                        </div>
                        <div className='generatedHeroContent'>
                            <div>
                                <img className='generatedHeroContentImg' src={"https://cdn.cloudflare.steamstatic.com/" + randomHero.img}></img>
                            </div>
                            <div className='heroInfo'>
                                <div className='heroInfoInner'>
                                    <div>
                                        <img
                                            src={attrImg[randomHero.primary_attr]}
                                            title={attrTitle[randomHero.primary_attr]}
                                        >
                                        </img>
                                        <p className='P'>{attrTitle[randomHero.primary_attr]}</p>
                                    </div>
                                    <div>
                                        <img
                                            src={randomHero.attack_type == "Ranged" ? Ranged : Melee}
                                            title={randomHero.attack_type == "Ranged" ? "Ranged" : "Melee"}
                                        ></img>
                                        <p>{randomHero.attack_type}</p>
                                    </div>
                                </div>
                                <div className='rolesInfo'>
                                    {randomHero.roles.map((role, index) => (
                                        <div className='rolesInfoInner'>
                                            <img
                                                src={rolesImg[randomHero.roles[index]]}
                                                title={rolesTitle[randomHero.roles[index]]}
                                            ></img>
                                            <p key={index}>{role}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='rate'>
                            <div>
                                <p>Pick Rate: </p>
                                <p>{randomHero.pub_pick}</p>
                            </div>
                            <div>
                                <p>Win Rate:</p>
                                <div>
                                    <p>{((randomHero.pub_win / randomHero.pub_pick) * 100) | 0}%</p>
                                    <p>({randomHero.pub_win})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div >
    )
}
