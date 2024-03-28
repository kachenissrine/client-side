// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <h1 className="text-base text-black font-semibold ml-2">Jobpilot</h1>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-blue-800/75" href="#"> Home </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-blue-800/75"
                                       href="#"> Find Job </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-blue-800/75"
                                       href="#"> Employers </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-blue-800/75"
                                       href="#"> Candidates </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-blue-800/75"
                                       href="#"> Dashboard </a>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                        <Link to="/signin">
                                <button
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm text-blue-600 font-semibold text-center justify-center items-center">Sign
                                    In
                                </button>
                            </Link>


                            <div className="hidden sm:flex">
                                <Link to="/signupcandidate">
                                <button
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center justify-center items-center">Sign Up
                                </button>
                                </Link>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
