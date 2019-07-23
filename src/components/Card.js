import React from 'react';
import '../css/card.css';
import PropTypes from 'prop-types';

class Card extends React.Component{ 
    render(){
        const {id, value, faceUp} = this.props.card;

        return (faceUp ? (
            <div >
                <div className='card faceUp' onClick={this.props.handleClick.bind(this, id)}>{value}</div>
            </div>
            ) : (
            <div >
                <div className='card faceDown' onClick={this.props.handleClick.bind(this, id)}></div>
            </div>
            )
        )
    }
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired
}


export default Card;