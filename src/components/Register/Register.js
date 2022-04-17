import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

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

        console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='container w-50 mx-auto mt-[4vw]'>
            <h1 className='text-[4vw] text-white font-bold shadow-2xl shadow-white mx-16'>Registration <span className='text-[#beafa7]'>Form</span></h1>
            <section className="h-screen mb-96">
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
                        <SocialLogin></SocialLogin>
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