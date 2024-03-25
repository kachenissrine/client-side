// Header.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";


const Forget = () => {
    return (
        <div className="w-full h-screen flex items-start">

            {/*left side login page*/}
            <div className="relative w-1/2 h-full flex flex-col">
                <img src="../../../public/images/auth/signIn.png" className="w-full h-full object-cover"/>
            </div>

            {/*right side login form */}
            <div className="w-1/2 h-full flex flex-col p-20 justify-between py-9">
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
                    </svg>
                    <h1 className="text-base text-black font-semibold ml-2">Jobpilot</h1>
                </div>


                <div className="w-full flex flex-col max-w-[550px]">
                    <div className="w-full flex flex-col mb-10">
                        <h3 className="text-3xl font font-semibold mb-4"> Forget Password</h3>
                        <Link to="/signin">
                            <p className="text-sm mb-2">Go back to <span
                                className="font-semibold text-[#0A65CC] underline underline-offset-2 cursor-pointer">Sign In</span>
                            </p></Link>
                        <Link to="/signupcandidate">
                            <p className="text-sm mb-2">Don't have account <span
                            className="font-semibold text-[#0A65CC] underline underline-offset-2 cursor-pointer">Sign Up</span>
                        </p></Link>

                    </div>

                    <div className="w-full flex flex-col ">
                        <input type="email" placeholder="Email"
                               className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>


                    <div className="w-full flex items-center my-4">
                        <button
                            className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center justify-center flex items-center">
                            <span>Reset Password</span>
                            <svg className="w-6 h-6 ml-2 text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </button>
                    </div>

                </div>

                <div className="flex justify-center space-x-4">

                </div>

            </div>

        </div>


    );
};

export default Forget;