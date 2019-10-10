import React from 'react';
import '../css/playerstats.css';
import PropTypes from 'prop-types';

class PlayerStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           topScore:''
        }
    }

    componentDidMount(){
        fetch('https://memorygame-backend.herokuapp.com/topScore')
            .then(response => response.json())    
            .then(data => 
                {
                this.setState({
                    topScore: data.score
                })
            })
            .catch(err => console.log('unable to get score data'))

    }
    
    render (){
        const moves = this.props.moves;
        
        return(
            <div className='playerStatsContainer'>
                <p className="quickest">{`Quickest Player: ${this.state.topScore} moves`}</p>
                <p>{`Current Player: ${moves} moves`}</p>
            </div>
        )
    }
    
}

PlayerStats.propTypes = {
    moves: PropTypes.number.isRequired
}

export default PlayerStats