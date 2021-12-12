import React from 'react';
import Link from './Link';
import { ReactComponent as UpArrowIcon } from '../Res/Icons/chevron-up.svg';
import { ReactComponent as DownArrowIcon } from '../Res/Icons/chevron-down.svg';

const FooterDropdown = ({ heading, linksData, isOpen }) => {
    return (
        <div className={`flex flex-col max-w-md pb-3 pt-4 space-y-3 ${isOpen ? '' : 'border-b border-white-rgba-02'}`}>
            <div className='flex justify-between text-white fill-current'>
                <h5 className='text-white font-medium'>{heading}</h5>

                {
                    isOpen ?
                    <UpArrowIcon/> :
                    <DownArrowIcon/>
                }
            </div>

            {
                isOpen ?
                <div className='flex flex-col justify-start space-y-2'>
                    {
                        linksData.map((curr, index) =>
                            <Link key={index} text={curr.text} url={curr.url}/>
                        )
                    }
                </div> :
                null
            }
        </div>
    )
}

export default FooterDropdown;