import React, { useState } from 'react';
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

interface CardManagerState {
  deck: (number | undefined)[],
  hand: any[],
  discard: (number | undefined)[]
}

function CardManager() {
  /**
   * useState returns a pair: the current state value and a function to update it.
   * React devs recommend to split state into multiple state variables based on
   * which values tend to change together.
   */
  const [cards, setCards] = useState<CardManagerState>({
    deck: shuffle([3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]),
    hand: [],
    discard: []
  });

  const [played, setPlayed] = useState([]);

  function drawHand() {
    /**
     * Clone the cards Array with Array.from or spread operator.
     * Using the = syntax copies by reference, so React doesn't
     * see any changes when setCards is called later.
     */
    let tempDeck = Array.from(cards.deck);
    let tempDiscard = [...cards.discard, ...cards.hand];
    let newHand = [];

    while (newHand.length < 4) {
      if (tempDeck.length === 0) {
        tempDeck = shuffle(tempDiscard);
        tempDiscard = [];
      }
      let card = tempDeck.pop();
      newHand.push(card);
    }

    setCards({ deck: tempDeck, hand: newHand, discard: tempDiscard });
  }

  function handleCardSelect(value: number) {
    console.log(value);
  }

  return (
    <div className="CardManager">
      <div className="CardManager-buttons">
        <button onClick={drawHand}>Draw</button>
      </div>
      <div className="CardManager-cards">
        <Deck size={cards.deck.length} />
        <Hand values={cards.hand} handleCardClick={handleCardSelect}/>
        <Played values={played} />
      </div>
      <div>
        <p>deck: {cards.deck}</p>
        <p>hand: {cards.hand}</p>
        <p>discard: {cards.discard}</p>
      </div>
    </div>
  );
}

export default CardManager;
