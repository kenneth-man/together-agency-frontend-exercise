import React from 'react';
import Link from './Link';
import ButtonBlue from './ButtonBlue';
import { ReactComponent as LogoIcon } from '../Res/Icons/logo.svg';
import { ReactComponent as MenuIcon } from '../Res/Icons/menu.svg';

const Navbar = ({ navbarData }) => {
    return (
        <div className='flex items-center justify-between h-20 px-5 bg-blue-900 md:h-24 md:px-10'>
            <div className='hidden sm:flex items-center'>
                <LogoIcon/>

                <div className='flex items-center justify-evenly sm:space-x-5 sm:ml-5 md:space-x-8 md:ml-8 lg:space-x-20 lg:ml-20'>
                    {
                        navbarData.map((curr, index) => 
                            <Link key={index} text={curr.text} url={curr.url}/>
                        )
                    }
                </div>
            </div>

            <div className='hidden sm:flex items-center justify-between'>
                <Link text='Log in'/>

                <ButtonBlue text='Request a demo' extraClass='lg:ml-7 md:ml-5 sm:ml-3'/>
            </div>

            <div className='sm:hidden flex items-center justify-between w-full'>
                <LogoIcon/>

                <button className='fill-current text-white'>
                    <MenuIcon/>
                </button>
            </div>
        </div>
    )
}

export default Navbar;