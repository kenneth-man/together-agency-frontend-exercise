import React from 'react';

const ButtonUnderline = ({ text, extraClass }) => {
    return (
        <button className={`underline underline-offset text-lg font-extrabold ${extraClass ? extraClass : ''}`}>
            {text}
        </button>
    )
}

export default ButtonUnderline;