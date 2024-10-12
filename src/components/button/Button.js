import React from 'react'

export default function Button(props, attackType, setAttackType) {
    let value = props.value
    return (
        <button value={value} className={`attackTypeButt ${(attackType == {value} ? 'attackTypeButtActive' : '')}`} title={value} onClick={() => setAttackType(attackType == {value} ? null : { value })} >
            <img src={props.img} alt={value} ></img>
        </button>
    )
}