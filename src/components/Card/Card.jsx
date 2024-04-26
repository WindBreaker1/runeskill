//importing css
import "./Card.css"
//useState
import React, { useState } from 'react';

export const Card = (props) => {
  const {icon, title, maxLevel} = props;
  
  const [exp, setExp] = useState(props.exp);
  const [level, setLevel] = useState(props.level);
  

  function addExp() {
    setExp((prevExp) => prevExp + 1);
  }

  function levelUp() {
    if (exp >= 10) {
      setLevel((prevLevel) => prevLevel + 1)
    } else if (exp >= 20) {
      setLevel((prevLevel) => prevLevel + 1)
    }
  }
  //levelUp();

  function deleteCard() {
    const updatedCards = cards.filter
  }

  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <p className="card-title">{title}</p>
      <p className="card-level">Level: {level}/{maxLevel}</p>
      <p className="card-exp">{exp} EXP</p>
      <button className="add-exp-button" onClick={addExp}>Add EXP</button>
      <button className="delete-button" onClick={deleteCard}>Delete</button>
    </div>
  )
}
