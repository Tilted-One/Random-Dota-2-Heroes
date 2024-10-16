import React from 'react'

export default function Button(props) {
    const attribute ={
        'all': 'Universal',
        'str': 'Strength',
        'agi': 'Agility',
        'int': 'Intelligence'
    }
    return (
        <button value={props.value} className={`${props.butt} ${(props.state == props.value ? props.buttActive : '')}`} title={attribute[props.value]} onClick={() => props.setState(props.state == props.value ? null : props.value)} >
            <img src={props.icon} alt={props.value} ></img>
        </button>
    )
}  