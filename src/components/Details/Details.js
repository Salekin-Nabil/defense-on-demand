import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    let params = useParams();

    return (
        <div>
            <h1 className='text-5xl font-bold text-white text-center mt-[1vw]'>Service Details: ({params.serviceId})</h1>
        </div>
    );
};

export default Details;