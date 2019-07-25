import React from 'react';

const ResetBtn = ({resetGame}) => {
    return(
        <div style={resetBtnContainerStyle}>
            <button style={resetBtnStyle} onClick={resetGame}>Reset</button>
        </div>
    );
}

const resetBtnContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
    }

const resetBtnStyle = {
    height: '2rem',
    width: '4rem'
}

export default ResetBtn;