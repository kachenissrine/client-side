import React from 'react';

const ResetPassword = () => {
  return(
      <div className="grid h-screen place-content-center bg-white">
          {/*  <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md items-center ">
                <div className="flex">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
                    </svg>
                    <h1 className="text-base text-black font-semibold ml-2">Jobpilot</h1>
                </div>
            </div>*/}

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
              <div className="bg-layer-2 py-20 px-20 sm:rounded-lg sm:px-10 justify-between">
                  <div className="mx-auto max-w-lg text-center">
                      <h1 className="text-2xl font-bold sm:text-3xl">Reset Password</h1>

                      <br/>
                      <p className="mt-4 text-gray-500">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>

                      <div className="my-10">
                          <input type="password" placeholder="New Password" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          <input type="password" placeholder="Confirm password" className="w-full my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                          <button
                              className="my-2 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center justify-center flex items-center">
                              <span>Reset Password</span>
                              <svg className="w-6 h-6 ml-2 text-white" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                   viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4"/>
                              </svg>
                          </button>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  );
};
export default ResetPassword;