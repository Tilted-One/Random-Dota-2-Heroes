import React from 'react'

import Melee from '../../images/melee.svg'
import Ranged from '../../images/ranged.svg'

import style from './attackType.css'
export default function AttackType({attackType, setAttackType}){
    

    function attackTypeClick(event) {
        const clickedButton = event.target;
        const allButtons = document.querySelectorAll('.attackTypeButt');
        allButtons.forEach((button) => {
            if (button !== clickedButton) {
                button.classList.remove('attackTypeButtActive')
            }
        })
        clickedButton.classList.toggle('attackTypeButtActive')
        setAttackType(clickedButton.getAttribute('value'))
    }
    return(
        <div className='attackType'>
                    <h3 className='attackTypeText'>attack type</h3>
                    <div className='attackTypeInner'>
                        <button value='Melee' className='attackTypeButt' title='Melee' onClick={attackTypeClick} >
                            <img src={Melee} alt='Melee' ></img>
                        </button>
                        <button value='Ranged' className='attackTypeButt' title='Ranged' onClick={attackTypeClick}>
                            <img src={Ranged} alt='Ranged' ></img>
                        </button>
                    </div>
                </div>
    )
}
