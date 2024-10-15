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

import Button from "../button/Button";
import RoleButton from "../button/RoleButton";
export default function Roles({ mainRole, setMainRole, role, setRole }) {
    return (
        <div className='roles'>
            <h3 className='rolesText'>roles</h3>
            <div className='rollesInner'>

                <Button state={mainRole} setState={setMainRole} icon={Carry} value='Carry' title='Carry' butt='mainRoleButton' buttActive='mainRoleButtonActive' />
                <Button state={mainRole} setState={setMainRole} icon={Support} value='Support' title='Support' butt='mainRoleButton' buttActive='mainRoleButtonActive' />
                <span></span>

                <RoleButton role={role} setRole={setRole} icon={Disabler} value='Disabler' />
                <RoleButton role={role} setRole={setRole} icon={Durable} value='Durable' />
                <RoleButton role={role} setRole={setRole} icon={Escape} value='Escape' />
                <RoleButton role={role} setRole={setRole} icon={Initiator} value='Initiator' />
                <RoleButton role={role} setRole={setRole} icon={Nuker} value='Nuker' />
                <RoleButton role={role} setRole={setRole} icon={Pusher} value='Pusher' />

            </div>
        </div>
    )
}