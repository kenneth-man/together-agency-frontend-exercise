import React from 'react';
import Searchbar from './Searchbar';
import ButtonBlue from './ButtonBlue';

const HeadingGroupEmail = ({ heading, subheading, textColor, buttonText, extraClass }) => {
    return (
        <div className={`flex flex-col justify-between space-y-6 sm:max-w-xl ${extraClass ? extraClass : ''}`}>
            <h1 className={textColor}>{heading}</h1>

            <h4 className={textColor}>{subheading}</h4>

            <div className='flex flex-col xl:flex-row space-y-2 xl:space-x-2 xl:space-y-0'>
                <Searchbar/>
                <ButtonBlue text={buttonText}/>
            </div>
        </div>
    )
}

export default HeadingGroupEmail;