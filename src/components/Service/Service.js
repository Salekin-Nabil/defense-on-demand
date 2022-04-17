import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, price, image, description} = service;

    const navigate = useNavigate();
    return (
        <div className=''>
            <div className="flex justify-center my-[5vw] relative ">
                <div className="rounded-3xl shadow-2xl shadow-white bg-[#beafa7] max-w-sm p-5 h-[680px] hover:bg-indigo-50 mx-2">
                    <a className='flex justify-center' href="#!">
                    <img className="rounded-3xl border-[10px] border-white" src={image} alt=""/>
                    </a>
                    <h4 className='text-[20px] font-bold mt-[40px]'>{name}</h4>
                    <h3 className='text-[24px] font-bold mt-[40px]'>${price}</h3>
                    <p className='text-[14px] mt-[40px] font-medium'>{description}</p>
                    <div className="flex justify-center absolute w-full bottom-4 ml-[-28px]">
                        <button onClick={()=>navigate(`/Details/${name}`)} type="button" className="block px-6 py-2.5 w-80 md:w-80 bg-[#a48e74] text-white font-medium text-lg leading-tight uppercase rounded-3xl shadow-md hover:bg-[#837269] hover:shadow-lg focus:bg-[#837269] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#604d45] active:shadow-lg transition duration-150 ease-in-out">CHECK OUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;