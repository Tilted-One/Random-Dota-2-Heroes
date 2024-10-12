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

export default function Roles({ mainRole, setMainRole, role, setRole }) {
    return (
        <div className='roles'>
            <h3 className='rolesText'>roles</h3>
            <div className='rollesInner'>
                <button value='Carry' className={`mainRoleButton ${(mainRole == 'Carry' ? 'mainRoleButtonActive' : '')}`} title='Carry' onClick={() => setMainRole(mainRole == 'Carry' ? null : 'Carry')}>
                    <img src={Carry}></img>
                </button>
                <button value='Support' className={`mainRoleButton ${(mainRole == 'Support' ? 'mainRoleButtonActive' : '')}`} title='Support' onClick={() => setMainRole(mainRole == 'Support' ? null : 'Support')}>
                    <img src={Support}></img>
                </button>
                <span></span>
                <button value='Disabler' className={`roleButton ${(role.includes('Disabler') ? 'roleButtonActive' : '')}`} title='Disabler' onClick={() => setRole(role.includes('Disabler') ? role.filter(item => item != 'Disabler') : [...role, 'Disabler'])}>
                    <img src={Disabler}></img>
                </button>
                <button value='Durable' className={`roleButton ${(role.includes('Durable') ? 'roleButtonActive' : '')}`} title='Durable' onClick={() => setRole(role.includes('Durable') ? role.filter(item => item != 'Durable') : [...role, 'Durable'])}>
                    <img src={Durable}></img>
                </button>
                <button value='Escape' className={`roleButton ${(role.includes('Escape') ? 'roleButtonActive' : '')}`} title='Escape' onClick={() => setRole(role.includes('Escape') ? role.filter(item => item != 'Escape') : [...role, 'Escape'])}>
                    <img src={Escape}></img>
                </button>
                <button value='Initiator' className={`roleButton ${(role.includes('Initiator') ? 'roleButtonActive' : '')}`} title='Initiator' onClick={() => setRole(role.includes('Initiator') ? role.filter(item => item != 'Initiator') : [...role, 'Initiator'])}>
                    <img src={Initiator}></img>
                </button>
                <button value='Nuker' className={`roleButton ${(role.includes('Nuker') ? 'roleButtonActive' : '')}`} title='Nuker' onClick={() => setRole(role.includes('Nuker') ? role.filter(item => item != 'Nuker') : [...role, 'Nuker'])}>
                    <img src={Nuker}></img>
                </button>
                <button value='Pusher' className={`roleButton ${(role.includes('Pusher') ? 'roleButtonActive' : '')}`} title='Pusher' onClick={() => setRole(role.includes('Pusher') ? role.filter(item => item != 'Pusher') : [...role, 'Pusher'])}>
                    <img src={Pusher}></img>
                </button>
            </div>
        </div>
    )
}