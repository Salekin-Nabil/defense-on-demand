import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div id='services'>
            <h1 className='text-[4vw] font-bold mt-[5vw] text-white  shadow-2xl shadow-white'>Client's <span className='text-[#beafa7]'>Opinion</span></h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;