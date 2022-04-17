import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleUnbalancedFlip } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-[#20242c] py-4  shadow-2xl shadow-white'>
            <div className='flex items-center'>
                <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                    {open ? <XIcon className='text-white'></XIcon> : <MenuIcon className='text-white'></MenuIcon>}
                </div>
                <div className='flex items-center md:justify-start justify-center md:pl-8'>
                    <h4 className='text-[20px] font-semibold text-white'>DefenseOnDemand</h4>
                    <FontAwesomeIcon className='text-yellow-600 text-[20px] ml-[10px]' icon={faScaleUnbalancedFlip}></FontAwesomeIcon>
                </div>
                <div className={`md:flex bg-[#20242c] justify-center md:static w-full absolute duration-500 ease-in ${open ? 'top-14' : 'top-[-120px]'}`}>
                    <CustomLink className='mr-[6vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white' to="/">HOME</CustomLink>
                    {/* <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold' to="Home#services">SERVICES</CustomLink> */}
                    <CustomLink className='mr-[6vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white' to="/Blogs">BLOGS</CustomLink>
                    <CustomLink className='md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white' to="/About">ABOUT</CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;