import React from 'react';

const WinnerBanner = ({resetGame}) => {
    return(
        <div style={WinnerBannerStyle}>
            <h1 style={textStyle}>You Win!</h1>
            <button onClick={resetGame} style={btnStyle}>Reset Game</button>
        </div>
    );
}

const WinnerBannerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70vw',
    height: '28rem',
    textAlign: 'center',
    position: 'absolute',
    top: '2rem',
    left: '15%',
    background: 'linear-gradient(45deg, rgba(153,66,172,0.95) 0%, rgba(206,179,236,0.95) 100%)',
    borderRadius: '10%'
}

const textStyle = {
    fontSize: '3.5rem',
    height: '5rem',
}

const btnStyle = {
    marginTop: '2rem',
    width: '30%',
    height: '2rem',
    borderRadius: '5%'
}

export default WinnerBanner;
