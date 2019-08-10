import React from 'react';
import '../css/winnerbanner.css';
import picture from '../pics/winner.png';

const WinnerBanner = ({resetGame}) => {
    return(
        <div className='winnerBannerContainer'>
            <h1 className='text' >You Win!</h1>
            <img src={picture} alt='people celebrating' className='img'/>
            <button onClick={resetGame} className='btn'>Restart Game</button>
        </div>
    );
}

  

export default WinnerBanner;
