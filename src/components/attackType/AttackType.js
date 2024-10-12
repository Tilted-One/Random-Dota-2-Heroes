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
                <button value='Melee' className={`attackTypeButt ${(attackType == 'Melee' ? 'attackTypeButtActive' : '')}`} title='Melee' onClick={() => setAttackType(attackType == 'Melee' ? null : 'Melee')} >
                    <img src={Melee} alt='Melee' ></img>
                </button>
                <button value='Ranged' className={`attackTypeButt ${(attackType == 'Ranged' ? 'attackTypeButtActive' : '')}`} title='Ranged' onClick={() => setAttackType(attackType == 'Ranged' ? null : 'Ranged')} >
                    <img src={Ranged} alt='Ranged' ></img>
                </button>
            </div>
        </div>
    )
}
