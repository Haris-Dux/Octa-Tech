import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { createuserAsync, reset } from '../features/authSlice';
import toast from 'react-hot-toast';
import './Auth.css'

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: 'user',
    })

    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (user && user.role === 'admin') {
            navigate('/dashboard')
            window.scroll(0, 0)
        }
        // else {
        //     navigate('/login')
        //     window.scroll(0, 0)
        // }


        dispatch(reset());
    }, [user, isError, isSuccess, message, dispatch, navigate])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(createuserAsync(formData))
            .then(() => (
                navigate('/login')
            ))
    }


    return (
        <>
            <section id='signup' className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-[100vh] lg:py-12">
                    <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-14 sm:max-w-md xl:p-0">
                        <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl">
                                Create an account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="username"
                                    >
                                        Username
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 h-12 text-gray-900 sm:text-sm rounded-lg focus:outline-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        type="name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        required
                                    />
                                </div>


                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="email"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 h-12 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="name@gmail.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                    />
                                </div>


                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="number"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 h-12 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        id="number"
                                        type="number"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                        required
                                    />
                                </div>


                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 h-12 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-1.5"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                <button type="submit" className={`flex justify-center items-center w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                                    {isLoading && <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                        </path>
                                    </svg>
                                    }
                                    Create an account
                                </button>

                                <p className="text-sm font-light text-gray-500">
                                    Already have an account?{' '}
                                    <Link to="/login" className="font-medium text-primary-600 hover:underline">
                                        Login
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
