import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <div id='services'>
            <h1 className='text-[4vw] font-bold mt-[5vw] text-white'>Available <span className='text-[#beafa7]'>Services</span></h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;