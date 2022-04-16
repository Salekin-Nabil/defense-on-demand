import { faScaleUnbalancedFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-[#20242c] h-[200px] w-full flex justify-center py-[60px] mt-[50px]'>
            <div>
                <div className='flex items-center'>
                    <h4 className='text-[30px] font-semibold text-white'>Defense On Demand</h4>
                    <FontAwesomeIcon className='text-yellow-600 text-[30px] ml-[10px]' icon={faScaleUnbalancedFlip}></FontAwesomeIcon>
                </div>
                <p className='text-[14px] text-white'>copyright©salekinnabil@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;