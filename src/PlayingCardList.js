import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hook";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const URL = "https://deckofcardsapi.com/api/deck/new/draw/";

  // format a data object
  const formatCards = (data) => {
    console.log(data.cards[0]);
    let formattedData = {
      image: data.cards[0].image
    }
    
    return formattedData;
  }
  const [cards, getCard, resetCards] = useAxios(formatCards);
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => getCard(URL)}>Add a playing card!</button>
        <button onClick={resetCards}>Reset Cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
