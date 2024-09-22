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

export default function Data({ attackType, setAttackType, attr, setAttr, mainRole, setMainRole, role, setRole }) {

    const [data, setData] = React.useState(null)
    const [randomHero, setRandomHero] = React.useState(null)

    const [filteredData, setFilteredData] = React.useState(null)

    React.useEffect(() => {
        fetch('https://api.opendota.com/api/heroStats')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [1])

    React.useEffect(() => {
        if (attackType != null) {
            setFilteredData(
                data.filter(prevData => {
                    return prevData.attack_type === attackType;
                }));
            console.log(attackType)
            console.log(filteredData)
        }
    }, [attackType])

    React.useEffect(() => {

        if (attr != null) {
            console.log(attr)
            setFilteredData(
                data.filter(prevData => {
                    return prevData.primary_attr === attr;
                }));
            console.log(filteredData)
        }
    }, [attr])

    React.useEffect(() => {
        if (mainRole != null) {
            console.log(mainRole)
            setFilteredData(
                data.filter(prevData => {
                    return prevData.roles.includes(mainRole);
                }));
            console.log(filteredData)
        }
    }, [mainRole])

    // React.useEffect(() =>{
    //     if (role != null) {
    //         console.log(role)
    //         setFilteredData(
    //             data.filter(prevData => {
    //                 return prevData.roles.includes(role);
    //             }));
    //         console.log(filteredData)
    //     }
    // }, [role])


    const generateRandomHero = () => {
        const randomHeroId = Math.floor(Math.random() * data.length) + 1;
        setRandomHero(randomHeroId);
        console.log(data)

    }
    return (
        <div className='generate'>
            <button onClick={generateRandomHero} className='generateButton'>Generate Random Hero</button>
            {randomHero != null && <div>
                <div className='generateInner'>
                    <div className='generatedHero'>
                        <div className='generatedHeroTitle'>
                            <h2>{data[randomHero].localized_name}</h2>
                            <img src={"https://cdn.cloudflare.steamstatic.com/" + data[randomHero].icon}></img>
                        </div>
                        <div className='generatedHeroContent'>
                            <div>
                                <img src={"https://cdn.cloudflare.steamstatic.com/" + data[randomHero].img}></img>
                            </div>
                            <div className='heroInfo'>
                                <div className='heroInfoInner'>
                                    <div>
                                        <img
                                            src={data[randomHero].primary_attr == 'all' ? Universal
                                                : data[randomHero].primary_attr == 'str' ? Strength
                                                    : data[randomHero].primary_attr == 'agi' ? Agility
                                                        : data[randomHero].primary_attr == 'int' ? Intelligence
                                                            : ''}
                                            title={
                                                data[randomHero].primary_attr == 'all' ? "Universal"
                                                    : data[randomHero].primary_attr == 'str' ? "Strength"
                                                        : data[randomHero].primary_attr == 'agi' ? "Agility"
                                                            : data[randomHero].primary_attr == 'int' ? "Intelligence"
                                                                : ''}
                                        >
                                        </img>
                                        <p className='P'>{data[randomHero].primary_attr == 'all' ? "Universal"
                                            : data[randomHero].primary_attr == 'str' ? "Strength"
                                                : data[randomHero].primary_attr == 'agi' ? "Agility"
                                                    : data[randomHero].primary_attr == 'int' ? "Intelligence"
                                                        : ''
                                        }</p>
                                    </div>
                                    <div>
                                        <img
                                            src={data[randomHero].attack_type == "Ranged" ? Ranged : Melee}
                                            title={data[randomHero].attack_type == "Ranged" ? "Ranged" : "Melee"}
                                        ></img>
                                        <p>{data[randomHero].attack_type}</p>
                                    </div>
                                </div>
                                <div className='rolesInfo'>
                                    {data[randomHero].roles.map((role, index) => (
                                        <div className='rolesInfoInner'>
                                            <img src=
                                                {
                                                    data[randomHero].roles[index] == 'Carry' ? Carry
                                                        : data[randomHero].roles[index] == 'Support' ? Support
                                                            : data[randomHero].roles[index] == 'Disabler' ? Disabler
                                                                : data[randomHero].roles[index] == 'Durable' ? Durable
                                                                    : data[randomHero].roles[index] == 'Escape' ? Escape
                                                                        : data[randomHero].roles[index] == 'Initiator' ? Initiator
                                                                            : data[randomHero].roles[index] == 'Nuker' ? Nuker
                                                                                : data[randomHero].roles[index] == 'Pusher' ? Pusher : ''
                                                }
                                                title={
                                                    data[randomHero].roles[index] == 'Carry' ? "Cary"
                                                        : data[randomHero].roles[index] == 'Support' ? "Support"
                                                            : data[randomHero].roles[index] == 'Disabler' ? "Disabler"
                                                                : data[randomHero].roles[index] == 'Durable' ? "Durable"
                                                                    : data[randomHero].roles[index] == 'Escape' ? "Escape"
                                                                        : data[randomHero].roles[index] == 'Initiator' ? "Initiator"
                                                                            : data[randomHero].roles[index] == 'Nuker' ? "Nuker"
                                                                                : data[randomHero].roles[index] == 'Pusher' ? "Pusher" : ''
                                                }
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
                                <p>{data[randomHero].pub_pick}</p>
                            </div>
                            <div>
                                <p>Win Rate:</p>
                                <div>
                                    <p>{((data[randomHero].pub_win / data[randomHero].pub_pick) * 100) | 0}%</p>
                                    <p>({data[randomHero].pub_win})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div >
    )
}
