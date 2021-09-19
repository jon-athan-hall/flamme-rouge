import React, { useState, useEffect } from 'react';
import './CardManager.css';
import Deck from './Deck';
import Hand from './Hand';
import Played from './Played';
import { shuffle } from './helpers.js';

/*
interface CardManagerProps {
  deck: number[],
  discard: number[],
  hand: number[]
}
*/

function CardManager() {
  /**
   * useState returns a pair: the current state value and a function to update it.
   */
  const [deck, setDeck] = useState([3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]);
  useEffect(() => {
    setDeck(shuffle(deck));
  }, [deck]);

  const [hand, setHand] = useState([]);
  const [played, setPlayed] = useState([]);

  function handleDrawClick() {
    let newHand = [];

  }

  return (
    <div className="CardManager">
      <div className="CardManager-buttons">
        <button onClick={handleDrawClick}>Draw</button>
      </div>
      <div className="CardManager-cards">
        <Deck size={deck.length} />
        <Hand values={hand} />
        <Played values={played} />
      </div>
    </div>
  );
}

export default CardManager;