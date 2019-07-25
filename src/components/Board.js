import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';

const Board = ({cards, cardsClicked, handleClick}) => {
            return(
            <div style={boardStyle}>
                {
                    cards.map (card => {
                        return (
                            <Card card={card} key={card.index} cardsClicked={cardsClicked} handleClick={handleClick}/>   
                        )
                    })
                }
            </div>
        );
}

Board.propTypes = {
    cardsClicked: PropTypes.array.isRequired
}

const boardStyle ={
    width: '600px',
    display: 'flex', 
    flexWrap:'wrap'
}

export default Board;