import React from "react";

import Agility from '../../images/hero_agility.png'
import Intelligence from '../../images/hero_intelligence.png'
import Strength from '../../images/hero_strength.png'
import Universal from '../../images/hero_universal.png'

import style from './attribute.css'

export default function Attribute({attr, setAttr}) {
    

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

    return(
        <div className='attribute'>
                    <h3 className='attributeText'>attribute</h3>
                    <div className='attributeInner'>
                        <button value='all' onClick={attrClick} className='attr' title='Universal'>
                            <img src={Universal} alt='Universal_Attr'></img>
                        </button>
                        <button value='str' onClick={attrClick} className='attr' title='Strength'>
                            <img src={Strength} alt='Strength_Attr'></img>
                        </button>
                        <button value='agi' onClick={attrClick} className='attr' title='Agility'>
                            <img src={Agility} alt='Agility_Attr'></img>
                        </button>
                        <button value='int' onClick={attrClick} className='attr' title='Intelligence'>
                            <img src={Intelligence} alt='Intelligence_Attr'></img>
                        </button>
                    </div>
                </div>
    )
}