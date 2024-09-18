import React from 'react'
//Attack Type
import Melee from '../../images/melee.svg'
import Ranged from '../../images/ranged.svg'
//Attribute
import Agility from '../../images/hero_agility.png'
import Intelligence from '../../images/hero_intelligence.png'
import Strength from '../../images/hero_strength.png'
import Universal from '../../images/hero_universal.png'
//Roles
import Carry from '../../images/carry_icon.webp'
import Suport from '../../images/support_icon.webp'
import Nuker from '../../images/nuker_icon.webp'
import Disabler from '../../images/disabler_icon.webp'
import Durable from '../../images/durable_icon.webp'
import Escape from '../../images/escape_icon.webp'
import Pusher from '../../images/pusher_icon.webp'
import Inititator from '../../images/initiator_icon.webp'

import style from './header.css'

export default function Header() {
    const [attr, setAttr] = React.useState(null)

    function attrClick(event) {
        const clickedButton = event.target;
        const allButtons = document.querySelectorAll('.attr');
        allButtons.forEach((button) => {
            if (button !== clickedButton) {
                button.classList.remove('attrActive');
            }
        });
        clickedButton.classList.toggle('attrActive');

        setAttr(clickedButton.getAttribute('value'));
    }
    return (
        <header>
            <h1 className='title' >Generate Random Dota 2 Hero</h1>
            <div className='stats'>
                    <div className='attackType'>
                        <h3 className='attackTypeText'>attack type</h3>
                        <div className='attackTypeInner'>
                            <button value='melee' className='attackTypeButtActive'>
                                <img src={Melee} alt='Melee' title='Melee'></img>
                            </button>
                            <button value='melee' className='attackTypeButt'>
                                <img src={Ranged} alt='Ranged' title='Ranged'></img>
                            </button>
                        </div>
                    </div>
                <div className='attribute'>
                    <h3 className='attributeText'>attribute</h3>
                    <div className='attributeInner'>
                        <button value='all' onClick={attrClick} className='attr'>
                            <img src={Universal} alt='Universal_Attr' title='Universal'></img>
                        </button>
                        <button value='str' onClick={attrClick} className='attr'>
                            <img src={Strength} alt='Strength_Attr' title='Strength'></img>
                        </button>
                        <button value='agi' onClick={attrClick} className='attr'>
                            <img src={Agility} alt='Agility_Attr' title='Agility' disabled></img>
                        </button>
                        <button value='int' onClick={attrClick} className='attr' >
                            <img src={Intelligence} alt='Intelligence_Attr' title='Intelligence'></img>
                        </button>
                    </div>
                </div>
                <div className='roles'>
                    <h3 className='rolesText'>roles</h3>
                    <div className='rollesInner'>
                        <div>
                            <img src={Carry}></img>
                        </div>
                        <div>
                            <img src={Suport}></img>
                        </div>
                        <span>

                        </span>
                        <div>
                            <img src={Nuker}></img>
                        </div>
                        <div>
                            <img src={Disabler}></img>
                        </div>
                        <div>
                            <img src={Durable}></img>
                        </div>
                        <div>
                            <img src={Escape}></img>
                        </div>
                        <div>
                            <img src={Carry}></img>
                        </div>
                        <div>
                            <img src={Pusher}></img>
                        </div>
                        <div>
                            <img src={Inititator} className='imgs'></img>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}