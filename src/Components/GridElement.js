import React from 'react';

const GridElement = ({ elementColor }) => {
    return (
        <div className={`h-8 w-28 sm:h-10 sm:w-36 ${elementColor}`}>
        </div>
    )
}

export default GridElement;