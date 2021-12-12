import React from 'react';

const ButtonBlue = ({ text, extraClass }) => {
    return (
        <button className={`px-4 py-3 text-sm bg-blue-600 text-white ${extraClass ? extraClass : ''}`}>
            {text}
        </button>
    )
}

export default ButtonBlue;