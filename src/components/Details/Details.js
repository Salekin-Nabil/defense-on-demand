import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Details.css';

const Details = () => {
    let params = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = () => toast('Thank you for booking.');;

    return (
        <div>
            <h1 className='text-5xl font-bold text-white text-center mt-[1vw] mb-20'>Service Name: ({params.serviceId})</h1>
            <div className='mb-10 md:flex justify-between items-center'>
                <MapContainer className='rounded-lg h-[500px] md:w-1/2 w-7/8 md:mx-10 mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white mb-10' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                <div className=''>   
                <div className='flex justify-center'>
                    <div className="block p-6 rounded-xl shadow-lg shadow-white hover:shadow-xl hover:shadow-white bg-[#beafa7] max-w-md mx-4 md:mx-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className='text-2xl font-semibold mb-4 text-white'>Schedule Appointment</p>
                            <div className='flex justify-center'>
                            <div className="form-group mb-6 w-full mr-2">
                                <input type="text" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border-4 border-solid border-yellow-600
                                    shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput7"
                                    placeholder="Name"/>
                                </div>
                                <div className="form-group mb-6 w-full">
                                <input type="email" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border-4 border-solid border-yellow-600
                                    shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput8"
                                    placeholder="Email address"/>
                                </div>
                            </div>
                            <div className="form-group mb-6 w-full">
                                <input type="date" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border-4 border-solid border-yellow-600
                                    shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput9"
                                    placeholder="Email address"/>
                                </div>
                            <div className="form-group mb-6">
                            <textarea
                            className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border-4 border-solid border-yellow-600
                                shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                rounded-xl
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none
                            "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Your Case Description"
                            ></textarea>
                            </div>
                            <div className="form-group form-check text-center mb-6">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="exampleCheck87"/>
                            <label className="form-check-label inline-block text-white" for="exampleCheck87">Send me a copy of this message</label>
                            </div>
                            <button type="submit" className="
                            w-full
                            px-6
                            py-2.5
                            bg-yellow-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-xl
                            hover:bg-yellow-700
                            focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-yellow-800 active:shadow-lg
                            shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                            transition
                            duration-150
                            ease-in-out">Send</button>
                        </form>
                    </div>                
                </div>
                </div>
                <ToastContainer />
                </div>
        </div>
        
    );
};

export default Details;