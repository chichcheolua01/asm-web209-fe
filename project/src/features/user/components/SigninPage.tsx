import React from "react";

type Props = {};

const SigninPage = (props: Props) => {
  return (

    <section className="bg-white-50 dark:bg-white-900 mt-10 ">

      {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> */}

      <div className="w-full mx-auto mb-10 bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

          <form className="space-y-4 md:space-y-6" action="#">
            <div>

              <input type="text" name="email" id="email" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
            </div>
            <div>

              <input type="text" name="lastname" id="lastname" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
            </div>
            <button type="submit" className="w-full text-red bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center ">LOGIN</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Dont have an account? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create here</a>
            </p>
          </form>
        </div>
      </div>
      {/* </div> */}
    </section>

  )


};

export default SigninPage;