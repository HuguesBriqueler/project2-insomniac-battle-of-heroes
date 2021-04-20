import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card';
import draw from './components/draw';
import './App.css';

function App() {
  const [heroList, setHeroList] = useState([]);
  const [villainList, setVillainList] = useState([]);

  function showCards(id, avatarList, setAvatarList) {
    const url = `http://localhost:8000/api/${id}/`;
    axios.get(url)
      .then((response) => {
        setAvatarList([...avatarList, response.data]);
      });
  }

  return (
    <>
      <div className="App">
        <body>
          <div className="heroAvatar">
            <img src="https://nsa40.casimages.com/img/2021/04/15/210415123011254599.png" id="titleLogo" alt="title-logo" />
          </div>
          <div className="navBar">
            <button type="button" className="buttonOnMenu1">Menu</button>
            <button type="button" className="buttonOnMenu2">Play</button>
            <button type="button" className="buttonOnMenu3">Collection</button>
          </div>
          <div className="board">
            <div className="heroSide cards">
              <button type="button" onClick={() => showCards(draw(1), heroList, setHeroList)} className="drawButton">
                Draw hero
              </button>
              {heroList.map((oneHero) => (<Card avatar={oneHero} />))}
            </div>
            <div className="villainSide cards">
              <button type="button" onClick={() => showCards(draw(1), villainList, setVillainList)} className="drawButton">
                Draw villain
              </button>
              {villainList.map((oneVillain) => (<Card avatar={oneVillain} />))}
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
