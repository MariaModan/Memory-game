import React, { Component } from 'react';
import Board from './Board.js';
import cards from '../cards';
import ResetBtn from './ResetBtn';
import WinnerBanner from './WinnerBanner';
import PlayerStats from './PlayerStats';
import Title from './Title';



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
            //shuffles the cards and then adds their specific indexes to be used as keys later
            cards: shuffleCards(cards).map( (card, index) => {
                card.index = index;
                return card;
            }),
            cardsClicked: [],
            moves: 0,
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
            return ;
        }

        if (this.state.cardsClicked.length === 2){
            return ;
        }
        
        this.setState({
            moves: (this.state.moves + 1),
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
            fetch('https://memorygame-backend.herokuapp.com/updateTopScore', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "score": this.state.moves
                })
            })
            .then( response => response.json())
            .then(data => console.log(data))
            .catch( err => console.log(err))
            return true;
        } else {
            return false;
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
            cardsClicked: [],
            moves: 0
        })
    }

    render() {
        this.isWinner();
        return (
            <div>
                <PlayerStats moves={this.state.moves}/>
                <Title />
                <Board 
                    cardsClicked={this.state.cardsClicked} 
                    cards={this.state.cards}
                    handleClick={this.handleClick}
                />
                {
                    this.isWinner() ? <WinnerBanner resetGame={this.resetGame} /> : <ResetBtn resetGame={this.resetGame}/>
                }
                
            </div>
        )
    }
}

export default Game;