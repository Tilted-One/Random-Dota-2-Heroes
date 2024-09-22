import React from "react";

import Carry from '../../images/carry_icon.webp'
import Support from '../../images/support_icon.webp'
import Nuker from '../../images/nuker_icon.webp'
import Disabler from '../../images/disabler_icon.webp'
import Durable from '../../images/durable_icon.webp'
import Escape from '../../images/escape_icon.webp'
import Pusher from '../../images/pusher_icon.webp'
import Initiator from '../../images/initiator_icon.webp'

import stylfe from './roles.css'

export default function Roles({mainRole, setMainRole, role, setRole}) {

    function mainRoleClick(event) {
        const clickedButton = event.target;
        const allButtons = document.querySelectorAll('.mainRoleButton');
        allButtons.forEach((button) => {
            if (button !== clickedButton) {
                button.classList.remove('mainRoleButtonActive');
            }
        });
        clickedButton.classList.toggle('mainRoleButtonActive');

        setMainRole(clickedButton.getAttribute('value'));
    }
    function roleClick(event) {
        const clickedButton = event.target;
        const clickedButtonValue = event.target.value;
        clickedButton.classList.toggle('roleButtonActive');
        if (role.includes(clickedButtonValue)) {
            const i = role.indexOf(clickedButtonValue)
            setRole(role.filter(prevRole => prevRole != clickedButtonValue));
        }
        else {
            const newElement = (clickedButton.getAttribute('value'));
            setRole(oldArray => [...oldArray, newElement]);
        }
    }
    return (
        <div className='roles'>
            <h3 className='rolesText'>roles</h3>
            <div className='rollesInner'>
                <button value='Carry' className='mainRoleButton' title='Carry' onClick={mainRoleClick}>
                    <img src={Carry}></img>
                </button>
                <button value='Support' className='mainRoleButton' title='Support' onClick={mainRoleClick}>
                    <img src={Support}></img>
                </button>
                <span></span>
                <button value='Disabler' className='roleButton' title='Disabler' onClick={roleClick}>
                    <img src={Disabler}></img>
                </button>
                <button value='Durable' className='roleButton' title='Durable' onClick={roleClick}>
                    <img src={Durable}></img>
                </button>
                <button value='Escape' className='roleButton' title='Escape' onClick={roleClick}>
                    <img src={Escape}></img>
                </button>
                <button value='Initiator' className='roleButton' title='Initiator' onClick={roleClick}>
                    <img src={Initiator}></img>
                </button>
                <button value='Nuker' className='roleButton' title='Nuker' onClick={roleClick}>
                    <img src={Nuker}></img>
                </button>
                <button value='Pusher' className='roleButton' title='Pusher' onClick={roleClick}>
                    <img src={Pusher}></img>
                </button>
            </div>
        </div>
    )
}