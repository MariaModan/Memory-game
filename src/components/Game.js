import React, { Component } from 'react';
import Board from './Board.js';
import cards from '../cards';



class Game extends Component {
    constructor(){
        super();
        this.state = {
            cards: cards,
            cardsClicked: [],
        }
    }

// if the 2 cards have the same value it leavs them face-up, otherwise it turns them face-down
checkMatches = () => {
    if (this.state.cardsClicked[0].value !== this.state.cardsClicked[1].value) {
        this.setState({
            cards: this.state.cards.map ( card => {
                if ( card.id === this.state.cardsClicked[0].id || card.id === this.state.cardsClicked[1].id) {
                    card.faceUp = false;
                }
                return card;
                })
            });
        }
    this.setState({
        cardsClicked: []
    });   
}

handleClick = (id) => {

    //nothing happens if a card is already faceup
    if (this.state.cards[id].faceUp){
        return ;
    }
    
    this.setState({
        cardsClicked: [...this.state.cardsClicked, this.state.cards[id]],
        cards: this.state.cards.map ( card => {
            if(card.id === id){
                card.faceUp = !card.faceUp;
            }
            return card;
        })
    }, () => {setTimeout(() => 
                {if (this.state.cardsClicked.length === 2){
                    this.checkMatches();
                }}
            ,2000);});   
}

    render() {
        
        return (
            <div>
                <Board 
                    cardsClicked={this.state.cardsClicked} 
                    cards={this.state.cards}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default Game;