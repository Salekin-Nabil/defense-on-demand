import React from 'react';
import './Banner.css';
import saulGoodman_1 from '../../images/saulGoodman-1.jpg';
import saulGoodman_2 from '../../images/saulGoodman-2.jpg';
import saulGoodman_3 from '../../images/saulGoodman-3.jpg';
import saulGoodman_4 from '../../images/saulGoodman-4.jpg';
import saulGoodman_5 from '../../images/saulGoodman-5.jpg';
import saulGoodman_6 from '../../images/saulGoodman-6.jpg';

const Banner = () => {
    return (
        <div>
            <div>
            <img
                        src={saulGoodman_4}
                        className="block w-full md:hidden"
                        alt="..."
                    />
            </div>
            <div id="carouselExampleCaptions" className="carousel slide relative mt-1 hidden md:block" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                    <img
                        src={saulGoodman_4}
                        className="block w-full md:h-[650px]"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Better Call Saul</h5>
                        <p>Saul Goodman at your service.</p>
                    </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={saulGoodman_6}
                        className="block w-full md:h-[650px]"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">World's 2nd Best Lawyer</h5>
                        <p>You don't need a criminal lawyer, you need a criminal.</p>
                    </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={saulGoodman_5}
                        className="block w-full md:h-[650px]"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Jimmy Mcgill</h5>
                        <p>Saul Goodman, speedy justice for you.</p>
                    </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;