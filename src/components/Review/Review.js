import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Review.css';

const Review = ({review}) => {
    const {name, image, rating, comment} = review;
    return (
        <div className=''>
            <div className="flex justify-center my-[5vw]">
                <div className="rounded-lg shadow-lg bg-[#beafa7] max-w-sm p-5 h-[450px] hover:bg-indigo-50 mx-2">
                    <a className='flex justify-center' href="#!">
                    <img className="rounded-full border-[10px] border-white" src={image} alt=""/>
                    </a>
                    <h4 className='text-[20px] font-bold mt-[40px]'>{name}</h4>
                    <Rating className='mt-[2vw]'
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon style={{color: 'gray'}} icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                        readonly
                    ></Rating>
                    <p className='text-[14px] mt-[40px] font-medium'>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;