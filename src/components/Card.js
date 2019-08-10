import React from 'react';
import '../css/card.css';
import PropTypes from 'prop-types';

class Card extends React.Component{ 
    render(){
        const {value, faceUp, index, alt} = this.props.card;

        return (faceUp ? (
            <div >
                <div 
                    className='card faceUp' 
                    onClick={this.props.handleClick.bind(this, index)}
                >
                   <img 
                        src={require(`../pics/${value}`)}
                        alt={alt} 
                    />
                </div>
            </div>
            ) : (
            <div >
                <div 
                    className='card faceDown' 
                    onClick={this.props.handleClick.bind(this, index)}
                    >
                </div>
            </div>
            )
        )
    }
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired
}


export default Card;