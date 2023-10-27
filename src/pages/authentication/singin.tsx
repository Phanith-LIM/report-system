import React from 'react';
import {Button, Label, TextInput, Checkbox} from 'flowbite-react';
import {motion} from "framer-motion";

export const SignIn: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                                <TextInput
                                    id="email1"
                                    placeholder="name@rupp.edu.kh"
                                    required
                                    type="email"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="password"
                                    value="Your password"
                                />
                                <TextInput
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <Checkbox id="remember" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <Label htmlFor="remember">
                                            Remember me
                                        </Label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Forgot password?
                                </a>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.98  }}
                                transition={{ duration: 0.25 }}
                            >
                                <Button type="submit" className="w-full">
                                    Sign in
                                </Button >
                            </motion.div>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet?{" "}
                                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Request Now
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

