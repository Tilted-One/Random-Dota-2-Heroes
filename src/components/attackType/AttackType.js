import React from 'react'
import Button from '../button/Button'
import Melee from '../../images/melee.svg'
import Ranged from '../../images/ranged.svg'

import style from './attackType.css'
export default function AttackType({ attackType, setAttackType }) {
    return (
        <div className='attackType'>
            <h3 className='attackTypeText'>attack type</h3>
            <div className='attackTypeInner'>
                <Button state={attackType} setState={setAttackType} icon={Melee} value='Melee' title='Melee' butt='attackTypeButt' buttActive='attackTypeButtActive' />
                <Button state={attackType} setState={setAttackType} icon={Ranged} value='Ranged' title='Ranged' butt='attackTypeButt' buttActive='attackTypeButtActive' />
            </div>
        </div>
    )
}
