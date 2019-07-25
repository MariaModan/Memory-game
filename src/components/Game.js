import React, { Component } from 'react';
import Board from './Board.js';
import cards from '../cards';
import ResetBtn from './ResetBtn'


//Shuffles the cards at the beginning of the game
const shuffleCards = (cards) => {
    let copy = [...cards];

    let currentIndex = copy.length
    let temporaryValue;
    let randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex -= 1;
        temporaryValue = copy[currentIndex];
        copy[currentIndex] = copy[randomIndex];
        copy[randomIndex] = temporaryValue
    }

    return(copy);
}


class Game extends Component {
    constructor(){
        super();
        this.state = {
            cards: shuffleCards(cards).map( (card, index) => {
                card.index = index;
                return card;
            }),
            cardsClicked: [],
        };
        
    }

    // if the 2 cards have the same value it leavs them face-up, otherwise it turns them face-down
    checkMatches = () => {
        if (this.state.cardsClicked[0].value !== this.state.cardsClicked[1].value) {
            this.setState({
                cards: this.state.cards.map ( card => {
                    if ( card.index === this.state.cardsClicked[0].index || card.index === this.state.cardsClicked[1].index) {
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

    handleClick = (index) => {

        //a card won't be clickable if it is already faceup
        if (this.state.cards[index].faceUp){
            console.log(this.state.cards[index]);
            return ;
        }

        if (this.state.cardsClicked.length === 2){
            return ;
        }
        
        //need to fix: when i press fast it doens't add the third card to the cardsClicked array
        this.setState({
            cardsClicked: [...this.state.cardsClicked, this.state.cards[index]],
            cards: this.state.cards.map ( card => {
                if(card.index === index){
                    card.faceUp = !card.faceUp;
                }
                return card;
            })
        }, () => {if (this.state.cardsClicked.length === 2) {setTimeout(this.checkMatches, 1000);}});   
    }

    isWinner = () => {
        if (this.state.cards.filter( card => card.faceUp === false).length === 0){
            console.log('you win!');
        }
         
    }

    resetGame = () => {
        this.setState({
            cards: shuffleCards(cards).map( (card, index) => {
                card.index = index;
                if (card.faceUp === true){
                    card.faceUp = false;
                }
                return card;
            }),
            cardsClicked: []
        })
    }

    render() {
        this.isWinner();
        return (
            <div>
                <Board 
                    cardsClicked={this.state.cardsClicked} 
                    cards={this.state.cards}
                    handleClick={this.handleClick}
                />
                <ResetBtn resetGame={this.resetGame}/>
            </div>
        )
    }
}

export default Game;