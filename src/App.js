import logo from './logo.svg';
import './App.css';
import React from 'react';
import Generate from './components/generate/Generate'
import Header from './components/header/Header';
function App() {

  const [attackType, setAttackType] = React.useState(null)

  const [attr, setAttr] = React.useState(null)

  const [mainRole, setMainRole] = React.useState(null)
  const [role, setRole] = React.useState([])

  console.log(role)
  return (
    <div className="App">
      <Header
        attackType={attackType} setAttackType={setAttackType}
        attr={attr} setAttr={setAttr}
        mainRole={mainRole} setMainRole={setMainRole}
        role={role} setRole={setRole}
      />
      <Generate
        attackType={attackType} setAttackType={setAttackType}
        attr={attr} setAttr={setAttr}
        mainRole={mainRole} setMainRole={setMainRole}
        role={role} setRole={setRole}
      />
    </div>
  );
}

export default App;
