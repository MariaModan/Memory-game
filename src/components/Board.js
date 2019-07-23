import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';

const Board = ({cards, cardsClicked, handleClick}) => {
            return(
            <div style={{display: 'flex'}}>
                {
                    cards.map (card => {
                        return (
                            <Card card={card} key={card.id} cardsClicked={cardsClicked} handleClick={handleClick}/>   
                        )
                    })
                }
            </div>
        );
}

Board.propTypes = {
    cardsClicked: PropTypes.array.isRequired
}

export default Board;