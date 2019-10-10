import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import '../../css/board.css';

const Board = ({cards, cardsClicked, handleClick}) => {
            return(
                <div className='boardContainer'>
                    <div className='board'>
                        {
                            cards.map (card => {
                                return (
                                    <Card card={card} key={card.index} handleClick={handleClick}/>   
                                )
                            })
                        }
                    </div>
                </div>
            
        );
}

Board.propTypes = {
    cardsClicked: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}



export default Board;