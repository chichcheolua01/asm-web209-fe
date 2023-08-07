import React, { useState } from "react";
import { useSignupMutation } from "../user.services";
import { ISignup } from "../user.services";
import { Link } from "react-router-dom";


const SignupPage = () => {
    const [mutate, { isLoading }] = useSignupMutation();
    const [signupData, setSignupData] = useState<ISignup>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const [nameValid, setNameValid] = useState<string>("");
    const [emailValid, setEmailValid] = useState<string>("");
    const [passwordValid, setPasswordValid] = useState<string>("");
    const [confirmPasswordValid, setConfirmPasswordValid] = useState<string>("");
    const [signupSuccess, setSignupSuccess] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        let hasError = false;

        if (!signupData.name) {
            setNameValid("Name is required");
            hasError = true;
        } else {
            setNameValid("");
        }

        if (!signupData.email) {
            setEmailValid("Email is required");
            hasError = true;
        } else if (!validateEmail(signupData.email)) {
            setEmailValid("Invalid email format");
            hasError = true;
        } else {
            setEmailValid("");
        }

        if (!signupData.password) {
            setPasswordValid("Password is required");
            hasError = true;
        } else if (signupData.password.length < 6) {
            setPasswordValid("Password must be at least 6 characters");
            hasError = true;
        } else {
            setPasswordValid("");
        }

        if (!signupData.confirmPassword) {
            setConfirmPasswordValid("Confirm Password is required");
            hasError = true;
        } else if (signupData.confirmPassword !== signupData.password) {
            setConfirmPasswordValid("Passwords do not match");
            hasError = true;
        } else {
            setConfirmPasswordValid("");
        }

        if (hasError) {
            return;
        }

        mutate(signupData);

        try {
            await mutate(signupData);
            setSignupSuccess(true);
        } catch (error) {

        }
    };

    return (
        <section className="bg-white-50 dark:bg-white-900 mt-10 ">
            <div className="w-full bg-white mb-10 mx-auto  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="name" id="name" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"
                                value={signupData.name}
                                onChange={(e) => {
                                    setSignupData({ ...signupData, name: e.target.value });
                                    setNameValid("");
                                }} />
                            {nameValid && <p className="text-red-500 text-xs">{nameValid}</p>}
                        </div>
                        <div>
                            <input type="text" name="email" id="email" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"
                                value={signupData.email}
                                onChange={(e) => {
                                    setSignupData({ ...signupData, email: e.target.value });
                                    setEmailValid("");
                                }} />
                            {emailValid && <p className="text-red-500 text-xs">{emailValid}</p>}
                        </div>
                        <div>
                            <input type="text" name="password" id="password" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"
                                value={signupData.password}
                                onChange={(e) => {
                                    setSignupData({ ...signupData, password: e.target.value });
                                    setPasswordValid("");
                                }} />
                            {passwordValid && <p className="text-red-500 text-xs">{passwordValid}</p>}
                        </div>
                        <div>
                            <input type="text" name="confirmPassword" id="confirmPassword" className="bg-white-50 border border-white-300 text-white-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm password"
                                value={signupData.confirmPassword}
                                onChange={(e) => {
                                    setSignupData({ ...signupData, confirmPassword: e.target.value });
                                    setConfirmPasswordValid("");
                                }} />
                            {confirmPasswordValid && (<p className="text-red-500 text-xs">{confirmPasswordValid}</p>)}
                        </div>
                        {signupSuccess && (
                            <p className="text-green-500 text-sm">Signup successful! You can now <Link to={'/signin'}>log in</Link></p>
                        )}
                        <button type="submit" className="w-full text-red bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center ">
                            {isLoading ? "Signing up..." : "Sign Up"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default SignupPage;
