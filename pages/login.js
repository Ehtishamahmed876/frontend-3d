import useUser from '/lib/useUser';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '/lib/withSession';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import fetcher from '/lib/fetchJson';
import { toast } from 'react-toastify';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LoginPage = () => {

    const { mutateUser } = useUser({
        redirectTo: "/home",
        redirectIfFound: true,
    })
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState('')
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault()

        const body = {
            email: email,
            password: Password,
        }
        console.log(body)
        try {
            const res = await fetcher('/api/Login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            console.log("response1", res);
            mutateUser(res);
            // if (res.status == 403) {
            //     toast.error(res.message)
            //     throw new Error('User not found');
            // }
            if (res.user) {
                toast.success(res.message)
                router.replace('/home')
            }
        } catch (error) {
            toast.error("user not found")
            console.error('An unexpected error happened:', error)
            // setErrorMsg(error.data.message)
        }
    }
    return (
        <>
            <div className='flex flex-col bg-white min-h-screen'>

                <Navbar />
                <div className="flex flex-col items-center mt-2  px-4 sm:px-6 lg:px-8   text-black md:flex-row">
                    <div className="md:w-1/2 bg-gray-100">
                        <img src="/login.jpg" alt="Login" className="object-cover w-full h-full" />
                    </div>

                    <div className="md:w-1/2 bg-blue-500 m-2 rounded-lg py-10 px-8">
                        <h2 className="text-3xl text-white font-bold mb-8">Login</h2>
                        <form onSubmit={onSubmit} className='flex w-full   flex-col'>
                            <div className="mb-4 flex-1">
                                <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full flex-1 text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    type="email"
                                    id="email"
                                    // placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block   text-white text-lg font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                                    type="password"
                                    id="password"
                                    // placeholder="Enter your password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                {/* <Link href="/home"> */}
                                <button
                                    className="bg-black hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Login
                                </button>
                                {/* </Link> */}
                                <Link href="/signup">
                                    <button
                                        className="bg-black hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Signup
                                    </button>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
      
        </div>

        </>

    );
};

export default LoginPage;


export const getServerSideProps = withIronSessionSsr(function ({
    req,
    res,
}) {

    const user = req.session.user


    if (user === undefined) {
        return {
            props: {
                user: { isLoggedIn: false, email: '', username: '', password: '' },
            },
        }
    }
    else {
        return {
            redirect: {
                destination: "/home",
                permanent: false,
            },
            props: { user: req.session.user }
        }


    }
},
    sessionOptions)