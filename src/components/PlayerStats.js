import React from 'react';
import '../css/playerstats.css';

const PlayerStats = ({moves, topMoves}) => {
    return(
        <div className='playerStatsContainer'>
            <p>{`Quickest Player: ${topMoves} moves`}
                <span style={{float:'right',display:'absolut', top:'0'}}>
                    {`Current Player: ${moves} moves`}
                </span>
            </p>
        </div>
    );
}

export default PlayerStats