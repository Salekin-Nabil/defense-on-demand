import React from 'react';
import './Quotes.css';
import saulGoodman7 from '../../images/saulGoodman-7.jpg';
import saulGoodman8 from '../../images/saulGoodman-8.jpg';

const Quotes = () => {
    return (
        <div>
            <h1 className='text-[4vw] font-bold mt-[5vw] text-white  shadow-2xl shadow-white mb-28 md:mx-36'>Fun <span className='text-[#beafa7]'>Facts</span></h1>
            <div className='md:flex justify-between items-center md:mx-16 mb-52'>
                <div className='md:order-2 my-20 md:my-0 mx-4 md:mx-0'>
                    <img className='rounded-full border-8 border-white shadow-2xl shadow-white md:w-1/2' src={saulGoodman7} alt=''/>
                </div>
                <div className='md:w-1/3 mx-4 md:mr-0 my-20 md:my-0 md:ml-36 md:order-1 shadow-2xl shadow-white md:p-8 p-4 bg-[#463c37]'>
                    <h2 className='text-xl font-semibold text-white text-justify'>Lawyers. We're like health insurance. Hope you never need it. But man-o-man having it? No...</h2>
                    <h2 className='text-xl font-semibold text-white text-justify'>You wanna save your business? You wanna save  your dignity? You're gonna have fight.</h2>
                    <h2 className='text-xl font-semibold text-white text-justify'>Don't drink and drive, but if you do call me...</h2>
                </div>
            </div>
            <div className='md:flex justify-between items-center md:mx-16  mb-52'>
                <div className='md:order-1 my-20 md:ml-52 md:my-0 mx-4 md:mx-0'>
                    <img className='rounded-full border-8 border-white shadow-2xl shadow-white md:w-[40%]' src="https://static.displate.com/857x1200/displate/2019-11-07/ff7c02dc1da7065bdeae70b447d2ff21_8d32773592d41c4781c4545d84cb1a60.jpg" alt=''/>
                </div>
                <div className='md:w-1/3 mx-4 md:mr-0 my-20 md:my-0 md:mr-52 md:order-2 shadow-2xl shadow-white md:p-8 p-4 bg-[#463c37]'>
                    <h2 className='text-xl font-semibold text-white text-justify'>Only two things I know about Albuquerque; Bugs Bunny should've taken a left turn there, and give me a hundred tries, I'll never be able to spell it.</h2>
                    <h2 className='text-xl font-semibold text-white text-justify'>Money is not beside the point, money is the point.</h2>
                     <h2 className='text-xl font-semibold text-white text-justify'>I'm gonna be a damn good lawyer, and people are gonna know about it.</h2>
                </div>
            </div>
            <div className='md:flex justify-between items-center md:mx-16'>
                <div className='md:order-2 my-20 md:my-0 mx-4 md:mx-0'>
                    <img className='rounded-full border-8 border-white shadow-2xl shadow-white md:w-1/2' src={saulGoodman8} alt=''/>
                </div>
                <div className='md:w-1/3 mx-4 md:mr-0 my-20 md:my-0 md:ml-36 md:order-1 shadow-2xl shadow-white md:p-8 p-4 bg-[#463c37]'>
                    <h2 className='text-xl font-semibold text-white text-justify'>If you're committed enough, you can make any story work. I once convinced a woman I was Kevin Costner, and it worked, because I believed it!</h2>
                    <h2 className='text-xl font-semibold text-white text-justify'>I can solve any situation. I know a guy.</h2>
                    <h2 className='text-xl font-semibold text-white text-justify'>Let’s just say I know a guy… who knows a guy… who knows another guy who.</h2>
                </div>
            </div>
        </div>
    );
};

export default Quotes;