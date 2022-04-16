import React from 'react';
import useReview from '../../hooks/useReview';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div id='services'>
            <h1 className='text-[4vw] font-bold mt-[5vw] text-indigo-900'>Available <span className='text-orange-600'>Services</span></h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    reviews.map(review => <Service key={review.id} review={review}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;