import React from "react";

export default function RoleButton(props) {
    return (
        <button value={props.value} className={`roleButton ${(props.role.includes(props.value) ? 'roleButtonActive' : '')}`} title={props.value} onClick={() => props.setRole(props.role.includes(props.value) ? props.role.filter(item => item != props.value) : [...props.role, props.value])}>
            <img src={props.icon}></img>
        </button>
    )

}