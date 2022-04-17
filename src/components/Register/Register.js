import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../images/social icons/google.png';
import github from '../../images/social icons/github.png';
import './Register.css';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
     console.log('user', user);  
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='container w-50 mx-auto mt-[4vw]'>
            <h1 className='text-[4vw] text-white font-bold shadow-2xl shadow-white mx-16'>Registration <span className='text-[#beafa7]'>Form</span></h1>
            <section className="h-screen mb-32">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleRegister}>
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none shadow-lg shadow-white hover:shadow-xl hover:shadow-white"
                            name="name"
                            placeholder="Username"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none shadow-lg shadow-white hover:shadow-xl hover:shadow-white"
                            name="email"
                            placeholder="Email address"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none shadow-lg shadow-white hover:shadow-xl hover:shadow-white"
                            name="password"
                            placeholder="Password"
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                            <input
                                onClick={() => setAgree(!agree)}
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-600 checked:border-yellow-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck3"
                            />
                            <label className="form-check-label inline-block text-white" for="exampleCheck2">Accept Terms and Conditions</label>
                            </div>
                            <p
                            className="text-white hover:text-yellow-400 focus:text-yellow-500 active:text-yellow-600 duration-200 transition ease-in-out cursor-pointer"
                            >Update profile?</p
                            >
                        </div>
                        <button
                            disabled={!agree}
                            type="submit"
                            className="inline-block px-7 py-3 bg-yellow-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:bg-yellow-700 hover:shadow-xl hover:shadow-white focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full shadow-white"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Sign in
                        </button>

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0 text-white">OR</p>
                        </div>

                        <a
                            className="px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded shadow-lg hover:shadow-xl hover:shadow-white focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-white shadow-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <img className='w-[20px] mr-2' src={google} alt='' />Continue with Google
                        </a>
                        <a
                            className="px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded shadow-lg hover:shadow-xl hover:shadow-white focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-gray-200 shadow-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <img className='w-[28px] mr-1' src={github} alt='' />Continue with Github
                        </a>
                        <a
                            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:shadow-xl hover:shadow-white focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-[#55acee] shadow-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-3.5 h-3.5 mr-2"
                            >
                            <path
                                fill="currentColor"
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            /></svg>Continue with Twitter
                        </a>
                        <a
                            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:shadow-xl hover:shadow-white focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full flex justify-center items-center  bg-[#3b5998] shadow-white"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            className="w-3.5 h-3.5 mr-2"
                            >
                           
                            <path
                                fill="currentColor"
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            /></svg>Continue with Facebook
                        </a>
                        <div className='flex items-center mt-6'>
                            <p className='text-white text-left'> Already have an account?</p>
                            <Link to="/Login" className="text-yellow-300 ml-2 hover:text-yellow-400 focus:text-yellow-500 active:text-yellow-600 duration-200 transition ease-in-out">Login</Link>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
            <ToastContainer />
        </div>
    );
};

export default Register;