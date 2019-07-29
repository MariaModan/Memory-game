import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import '../css/board.css';

const Board = ({cards, cardsClicked, handleClick}) => {
            return(
                <div class='boardContainer'>
                    <div class='board'>
                        {
                            cards.map (card => {
                                return (
                                    <Card card={card} key={card.index} cardsClicked={cardsClicked} handleClick={handleClick}/>   
                                )
                            })
                        }
                    </div>
                </div>
            
        );
}

Board.propTypes = {
    cardsClicked: PropTypes.array.isRequired
}



export default Board;