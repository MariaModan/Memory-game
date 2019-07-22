import React, { Component } from 'react';
import '../css/card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            faceUp: false,
        }
    }

    // changes the state of faceUp when the card is clicked
    handleClick () {
        this.setState({
            faceUp: !this.state.faceUp
        })
    }

    //updates the card stype depending on the faceUp state
    cardStyle (){
        return this.state.faceUp ? "card faceUp" : "card faceDown";
    }
    
    render() {
        return (
            <div >
                <div className={this.cardStyle()} onClick={this.handleClick.bind(this)} >Card</div>
            </div>
        );
    }
}




export default Card;