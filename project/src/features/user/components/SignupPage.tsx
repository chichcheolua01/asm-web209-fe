import React from "react";

type Props = {};

const SignupPage = (props: Props) => {
    return (
        <section className="bg-white-50 dark:bg-white-900 mt-10 ">


            <div className="w-full bg-white mb-10 mx-auto  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <input type="text" name="fristName" id="fristName" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FristName" />
                        </div>
                        <div>
                            <input type="text" name="lastname" id="lastname" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LastName" />
                        </div>
                        <div>
                            <input type="text" name="email" id="email" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                        </div>
                        <div>
                            <input type="text" name="password" id="password" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                        </div>
                        <button type="submit" className="w-full text-red bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center ">CREATE</button>


                    </form>
                </div>
            </div>

        </section>
    )


};

export default SignupPage;
