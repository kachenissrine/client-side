// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
const SignUp = () => {

    return (
        <div className="w-full h-screen flex items-start">

            {/*left side login page*/}
            <div className="relative w-1/2 h-full flex flex-col">
                <img src="../../../public/images/auth/signIn.jpg" className="w-full h-full object-cover"/>
                {/*<div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-600 opacity-70"></div>*/}
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
                        <h3 className="text-3xl font font-semibold mb-4"> Create Account</h3>
                        <p className="text-sm mb-2">Already have account?
                            <Link to="/signin">
                                <span
                                    className="font-semibold text-[#0A65CC] underline underline-offset-2 cursor-pointer">Sign In</span>
                            </Link>
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-between my-1">
                        <input type="text" placeholder="Full Name" className="w-5/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <input type="text" placeholder="Username"
                               className="w-5/6 ml-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>

                    <div className="w-full flex flex-col">
                        <input type="email" placeholder="Email"
                               className="w-full my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <input type="password" placeholder="Password"
                               className="w-full my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <input type="password" placeholder="Confirm Password"
                               className="w-full my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>


                    <div className="w-full flex items-center">
                        <input type="checkbox" className="w-4 h-4 mr-2"/>
                        <p className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">I've read and agree
                            with your <span className="font-semibold text-[#0A65CC]">Terms of Services</span></p>
                    </div>


                    <div className="w-full flex items-center my-4">
                            <button
                                className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center justify-center flex items-center">
                                <Link to="/"><span>Create Account</span></Link>
                                <svg className="w-6 h-6 ml-2 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                            </button>


                    </div>


                    <span className="relative flex justify-center my-4">
                      <div
                          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                      ></div>

                      <span className="relative z-10 bg-white px-6 text-gray-500"> or </span>
                    </span>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            className="w-full inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold  text-text shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-bleu  -400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80"
                        >
                            <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                                <path
                                    fill="#FFC107"
                                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                />
                            </svg>
                            Sign in with Google
                        </button>

                    </div>

                </div>


                <div className="w-full flex items-center justify-center"></div>

            </div>

        </div>
    );
};
export default SignUp;