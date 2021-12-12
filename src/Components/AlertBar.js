import React from 'react';

const AlertBar = ({ text, linkText, linkURL }) => {
    return (
        <div className='flex items-center justify-center bg-blue-600 h-8 w-full'>
            <h5 className='text-white font-thin text-xs sm:text-base'>{text} &nbsp;</h5>
            <a href={linkURL} className='text-white underline leading-loose font-medium'>{linkText}</a>
        </div>
    )
}

export default AlertBar;