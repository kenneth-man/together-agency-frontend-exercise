import React from 'react';

const Link = ({ text, url, extraClass }) => {
    return (
        <a href={url} className={`text-white font-light ${extraClass ? extraClass : ''}`}>{text}</a>
    )
}

export default Link;