import React from 'react';
import './main.scss'

const Main = ({onChoosePage}) => {
    return (
        <div>
            Countries
            <div onClick={() => onChoosePage(1)}>1</div>
            <div onClick={() => onChoosePage(2)}>2</div>
            <div onClick={() => onChoosePage(3)}>3</div>
        </div>
    )
};

export default Main;