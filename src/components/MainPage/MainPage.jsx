// importing css
import "./MainPage.css"
// importing cards
import { Card } from "../Card/Card"
// impoting useState
import { useState } from "react";

// add this: https://www.npmjs.com/package/emoji-picker-element?activeTab=readme

export const MainPage = () => {
  const icon1 = "🌿";
  const title1 = 'Meditation';
  let level1 = 0;
  let maxLevel1 = 99;
  let exp1 = 0;

  const [cardItems, setCardItems] = useState(["Workout", "Journal", "Read"]);
  const [newCard, setNewCard] = useState('');

  const [cardIcon, setCardIcon] = useState(["💪", "📝", "📚"]);
  const [newCardIcon, setNewCardIcon] = useState('');
  
  const [cardLevel, setCardLevel] = useState([0, 3, 11]);
  const [newCardLevel, setNewCardLevel] = useState(0);

  const [cardExp, setCardExp] = useState([0, 10, 100]);
  const [newCardExp, setNewCardExp] = useState(0);
  
  function addCard() {
    setCardItems(c => [...c, newCard]);
    setNewCard('');

    setCardIcon(i => [...i, newCardIcon]);
    setNewCardIcon('');

    setCardLevel(l => [...l, newCardLevel]);
    setNewCardLevel(0);

    setCardExp(e => [...e, newCardExp]);
    setNewCardExp(0);
  }

  function handleInputChange(e) {
    setNewCard(e.target.value);
  }

  function handleIconChange(e) {
    setNewCardIcon(e.target.value);
  }
  
  return (
    <div className="main-page">
      <h2>Add a skill!</h2>
      <input type="text" placeholder='Set Icon' value={newCardIcon} onChange={handleIconChange} />
      <input type="text" placeholder='Set Skill' value={newCard} onChange={handleInputChange} />
      <button className="add-skill-button" onClick={addCard}>Add New Skill</button>
      <div className="skill-grid">
        <Card icon={icon1} title={title1} level={level1} maxLevel={maxLevel1} exp={exp1}/>   

        <div className="skill-items">
          {cardItems.map((card, index) => (
            <Card key={index} icon={cardIcon[index]} title={card} level={cardLevel[index]} maxLevel={maxLevel1} exp={cardExp[index]}/>
          ))}
        </div>

      </div>
    </div>
  )
}
