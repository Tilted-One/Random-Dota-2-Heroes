import React from "react";

import Agility from '../../images/hero_agility.png'
import Intelligence from '../../images/hero_intelligence.png'
import Strength from '../../images/hero_strength.png'
import Universal from '../../images/hero_universal.png'

import style from './attribute.css'

import Button from "../button/Button";
export default function Attribute({ attr, setAttr }) {

    return (
        <div className='attribute'>
            <h3 className='attributeText'>attribute</h3>
            <div className='attributeInner'>
                <Button state={attr} setState={setAttr} icon={Universal} value='all' title='Universal' butt='attr' buttActive='attrActive' />
                <Button state={attr} setState={setAttr} icon={Strength} value='str' title='Strength' butt='attr' buttActive='attrActive' />
                <Button state={attr} setState={setAttr} icon={Agility} value='agi' title='Agility' butt='attr' buttActive='attrActive' />
                <Button state={attr} setState={setAttr} icon={Intelligence} value='int' title='Intelligence' butt='attr' buttActive='attrActive' />
            </div>
        </div>
    )
}