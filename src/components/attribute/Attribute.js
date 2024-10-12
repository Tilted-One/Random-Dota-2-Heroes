import React from "react";

import Agility from '../../images/hero_agility.png'
import Intelligence from '../../images/hero_intelligence.png'
import Strength from '../../images/hero_strength.png'
import Universal from '../../images/hero_universal.png'

import style from './attribute.css'

export default function Attribute({ attr, setAttr }) {

    return (
        <div className='attribute'>
            <h3 className='attributeText'>attribute</h3>
            <div className='attributeInner'>
                <button value='all' onClick={() => setAttr(attr == 'all' ? null : 'all')} className={`attr ${(attr == 'all' ? 'attrActive' : '')}`} title='Universal'>
                    <img src={Universal} alt='Universal_Attr'></img>
                </button>
                <button value='str' onClick={() => setAttr(attr == 'str' ? null : 'str')} className={`attr ${(attr == 'str' ? 'attrActive' : '')}`} title='Strength'>
                    <img src={Strength} alt='Strength_Attr'></img>
                </button>
                <button value='agi' onClick={() => setAttr(attr == 'agi' ? null : 'agi')} className={`attr ${(attr == 'agi' ? 'attrActive' : '')}`} title='Agility'>
                    <img src={Agility} alt='Agility_Attr'></img>
                </button>
                <button value='int' onClick={() => setAttr(attr == 'int' ? null : 'int')} className={`attr ${(attr == 'int' ? 'attrActive' : '')}`} title='Intelligence'>
                    <img src={Intelligence} alt='Intelligence_Attr'></img>
                </button>
            </div>
        </div>
    )
}