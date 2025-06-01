import React, { useState } from 'react';

const LoginPage = ({ setShowLogin, onGuestClick }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Form submitted:', formData);
            localStorage.setItem('isLoggedIn', 'true');
            console.log('localStorage after login:', localStorage.getItem('isLoggedIn'));
            setShowLogin(false);

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <section className="bg-background dark:bg-background-dark">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-card dark:bg-card-dark rounded-lg shadow dark:border-cardborder-dark md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-label dark:text-label-dark md:text-2xl">
                            Sign in
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-label dark:text-label-dark">Your email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-inputbg dark:bg-inputbg-dark border border-inputborder dark:border-inputborder-dark text-inputtext dark:text-inputtext-dark rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full p-2.5" 
                                    placeholder="name@company.com" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-label dark:text-label-dark">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="••••••••" 
                                    className="bg-inputbg dark:bg-inputbg-dark border border-inputborder dark:border-inputborder-dark text-inputtext dark:text-inputtext-dark rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full p-2.5" 
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input 
                                            id="remember" 
                                            name="rememberMe"
                                            type="checkbox" 
                                            checked={formData.rememberMe}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 border border-inputborder dark:border-inputborder-dark rounded bg-inputbg dark:bg-inputbg-dark focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-card-dark"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="remember" className="text-label dark:text-label-dark">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-link hover:underline dark:text-link-dark">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-label dark:text-label-dark">
                                Don't have an account yet? <a href="#" className="font-medium text-link hover:underline dark:text-link-dark">Sign up</a>
                            </p>
                            <a 
                              href="#" 
                              className="block text-center font-light text-link dark:text-link-dark hover:underline"
                              onClick={onGuestClick}>
                              Continue as guest
                              </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;