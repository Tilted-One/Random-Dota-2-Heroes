import React from 'react'

export default function Button(props) {
    return (
        <button value={props.value} className={`${props.butt} ${(props.state == props.value ? props.buttActive : '')}`} title={props.value} onClick={() => props.setState(props.state == props.value ? null : props.value)} >
            <img src={props.icon} alt={props.value} ></img>
        </button>
    )
}  