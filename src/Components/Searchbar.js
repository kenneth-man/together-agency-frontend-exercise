import React from 'react';

const Searchbar = ({ extraClass }) => {
    return (
        <input 
            className={`px-4 py-3 placeholder-blue-900 w-full text-center xl:w-80 sm:text-left ${extraClass ? extraClass : ''}`} 
            placeholder='Enter your email address'
        />
    )
}

export default Searchbar;