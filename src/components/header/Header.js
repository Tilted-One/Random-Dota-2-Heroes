import React from 'react'
import AttackType from '../attackType/AttackType'
import Attribute from '../attribute/Attribute'
import Roles from '../roles/Roles'
import style from './header.css'

export default function Header({ attackType, setAttackType, attr, setAttr, mainRole, setMainRole, role, setRole, filteredData, setFilteredData }) {

    return (
        <header>
            <h1 className='title' >Generate Random Dota 2 Hero</h1>
            <div className='stats'>
                <AttackType attackType={attackType} setAttackType={setAttackType} filteredData={filteredData} setFilteredData={setFilteredData} />
                <Attribute attr={attr} setAttr={setAttr} />
                <Roles mainRole={mainRole} setMainRole={setMainRole}
                    role={role} setRole={setRole} />
            </div>
        </header>
    )
}