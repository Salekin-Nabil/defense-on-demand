import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='mt-[5vw] md:flex items-center justify-around md:mx-[5vw] order-first'>
            <div className='my-[10vw] md:my-0 flex justify-center order-last'>
                <img className='w-[80vw] md:w-[40vw] rounded-full bg-[#beafa7] border-8 border-white' src='victory.png'/>
            </div>
            <div className='md:text-left'>
                <h1 className='text-[4vw] text-white font-bold'>Shirajus Salekin Nabil</h1>
                <h1 className='text-[3vw] text-[#beafa7] font-bold'>Junior Developer</h1>
                <p className='md:w-7/12 mt-[2vw] text-white'>My objective is to obtain a challenging position in a high quality engineering environment where my <span className='text-[goldenrod] font-semibold'>resourceful
                experience</span> and <span className='text-[goldenrod] font-semibold'>academic skills</span> will add value to organizational operations.</p>
                <p className='md:w-7/12 mt-[1vw] text-white'>Interested areas: <span className='text-indigo-200'>Blockchain, Web Development, Machine Learning</span></p>
                <p className='md:w-7/12 mt-[1vw] text-white'>Expertise: <span className='text-[goldenrod]'>Solidity, Java Script, Python, React js, Node js</span></p>
                <p className='md:w-7/12 mt-[1vw] mb-[40px] text-white'>Familiar with: <span className='text-indigo-200'>Android Studio, NFT, HyperLedger, Web3 js</span></p>
            </div>
        </div>
    );
};

export default About;