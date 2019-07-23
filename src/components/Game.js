import React, { Component } from 'react';
import Board from './Board.js';



class Game extends Component {
    constructor(){
        super();
        this.state = {
            cards: [
                {value: 'A',
                id: 0,
                faceUp: false,},
                {value: 'B',
                id: 1,
                faceUp: false,},
                {value: 'A',
                id: 2,
                faceUp: false,}
            ],
            cardsClicked: [],
        }
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
    }, () => {setTimeout(checkMatches,2000);});
    
    //Case when 2 cards are faceup
    const checkMatches = () => {
        
        if (this.state.cardsClicked.length === 2 && this.state.cardsClicked[0].value !== this.state.cardsClicked[1].value) {
            this.setState({
                cards: this.state.cards.map ( card => {
                    if ( card.id === this.state.cardsClicked[0].id || card.id === this.state.cardsClicked[1].id) {
                        card.faceUp = false;
                    }
                    return card;
                }),
                cardsClicked: []
            });
           
        }else if (this.state.cardsClicked.length === 2){
            this.setState({
                cardsClicked: []
            })
        }else return;
    }  
   
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