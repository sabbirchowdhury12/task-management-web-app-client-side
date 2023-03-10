import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import AuthProvider, { AuthContext } from '../../AuthProvider/AuthProvider';
import { regiterRoute } from '../../Utilities/APIRoutes';

const Register = () => {

    const { createUserWithEmail, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                toast.success('register success');

                const userInfo = {
                    displayName: name
                };
                updateUser(userInfo)
                    .then((result) => {
                        saveUser(name, email);
                    }).catch(error => {
                        console.error(error);
                    });


            }).catch(err => {
                console.error(err);
                toast.error('Invalid password or email');
            });
    };

    const saveUser = async (name, email) => {
        const { data } = await axios.post(regiterRoute, {
            username: name,
            email
        });

        navigate('/');
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-700'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Email</label>
                        <input type="text" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 font-bold">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account. <span></span>
                    <Link to='/login' rel="noopener noreferrer" className="underline text-gray-100">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;