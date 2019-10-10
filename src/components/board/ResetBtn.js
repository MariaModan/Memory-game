import React from 'react';
import '../../css/rstBtn.css';
import PropTypes from 'prop-types';

const ResetBtn = ({resetGame}) => {
    return(
        <div className='resetBtnContainer'>
            <button className='resetBtn' onClick={resetGame}>Reset</button>
        </div>
    );
}

ResetBtn.propTypes = {
    resetGame: PropTypes.func.isRequired
}

export default ResetBtn;