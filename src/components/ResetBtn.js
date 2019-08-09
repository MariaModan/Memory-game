import React from 'react';
import '../css/rstBtn.css';

const ResetBtn = ({resetGame}) => {
    return(
        <div className='resetBtnContainer'>
            <button className='resetBtn' onClick={resetGame}>Reset</button>
        </div>
    );
}

export default ResetBtn;