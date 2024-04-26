// importing css
import "./MainPage.css"
// impoting useState
import { useState, useRef, useEffect } from "react";

// add this: https://www.npmjs.com/package/emoji-picker-element?activeTab=readme

export const MainPage = () => {
  const [card, setCard] = useState(["Workout", "Journal", "Read"]);
  const [newCard, setNewCard] = useState('');

  const [icon, setIcon] = useState(["💪", "📝", "📚"]);
  const [newIcon, setNewIcon] = useState('');

  const [desc, setDesc] = useState(["a", "b", "c"]);
  const [newDesc, setNewDesc] = useState(''); 

  const [timer, setTimer] = useState(15);

  // timer code
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)
    return () => {clearInterval(timerId.current)}
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerId.current);
    }
  }, [timer])
  
  function addCard() {
    setIcon(i => [...i, newIcon]);
    setNewIcon('');

    setCard(c => [...c, newCard]);
    setNewCard('');

    setDesc(d => [...d, newDesc]);
    setNewDesc('');
  }

  // input functions
  function handleIconChange(e) {
    setNewIcon(e.target.value);
  }
  function handleInputChange(e) {
    setNewCard(e.target.value);
  }
  function handleDescChange(e) {
    setNewDesc(e.target.value);
  }

  function completeCard(index) {
    
  }

  function deleteCard(index) {
    const updatedCards = card.filter((_, i) => i !== index);
    setCard(updatedCards);
    const updatedIcons = icon.filter((_, i) => i !== index);
    setIcon(updatedIcons);
    const updatedDesc = desc.filter((_, i) => i !== index);
    setDesc(updatedDesc);
  }

  
  return (
    <div className="main-page">
      <h2>Add a skill!</h2>
      <p>{timer}</p>
      <input type="text" placeholder='Set Icon' value={newIcon} onChange={handleIconChange} />
      <input type="text" placeholder='Set Skill' value={newCard} onChange={handleInputChange} />
      <input type="text" placeholder='Set Description' value={newDesc} onChange={handleDescChange} />
      <input type="number" placeholder='Set Timer (in minutes)' />
      <button className="add-skill-button" onClick={addCard}>Add New Skill</button>
      <div className="skill-grid">  
        {card.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{icon[index]}</div>
            <p className="card-title">{card}</p>
            <p className="card-description">{desc[index]}</p>
            <p className="card-timer">{timer[index]}</p>
            <button className="add-exp-button" onClick={() => {completeCard(index)}}>Complete</button>
            <button className="delete-button" onClick={() => {deleteCard(index)}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
