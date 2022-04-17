import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Service.css';

const Service = ({service}) => {
    const {name, image, description} = service;
    return (
        <div className=''>
            <div className="flex justify-center my-[5vw]">
                <div className="rounded-lg shadow-lg bg-[#beafa7] max-w-sm p-5 h-[600px] hover:bg-indigo-50 mx-2">
                    <a className='flex justify-center' href="#!">
                    <img className="rounded-xl border-[10px] border-white" src={image} alt=""/>
                    </a>
                    <h4 className='text-[20px] font-bold mt-[40px]'>{name}</h4>
                    <p className='text-[14px] mt-[40px] font-medium'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;