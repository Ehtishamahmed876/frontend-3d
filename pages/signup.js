import Navbar from '@/components/Navbar';
import fetcher from '/lib/fetchJson';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { url } from './api/Login';

const RegistrationPage = () => {
  const router = useRouter();
  const [Name, setName] = useState('');


  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const [Conpassword, setConpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(Password, Conpassword)
    if (Password !== Conpassword) {
      return toast.error("password and confirm password did not match")
    }
    const body = {
      username: Name,
      email: email,
      password: Password,
    }
    console.log(body)
    try {
      const res = await fetcher(url + `/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      console.log("response1", res);

      if (res.status == 403) {
        toast.error(res.message)
        throw new Error('User not found');
      }
      if (res.newUser) {
        toast.success(res.message)
        router.replace('/')
      }
    } catch (error) {
      toast.error("username or email already exist")
      console.error('An unexpected error happened:', error)
      // setErrorMsg(error.data.message)
    }
  };

  return (
    <>
      <div className='flex flex-col bg-white min-h-screen'>
        <Navbar />
        <div className="flex flex-col items-center   text-black md:flex-row">
          <div className="md:w-1/2 bg-gray-100">
            <img src="/signup.avif" alt="Login" className="object-cover w-full h-full" />
          </div>

          <div className="md:w-1/2 bg-blue-500 m-2 lg:mt-20 rounded-lg py-10 px-8">
            <h2 className="text-3xl text-white text-center font-serif font-bold mb-6">Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5'>

                <div className="mb-4">
                  <label className="block text-white text-lg font-bold mb-2" htmlFor="restaurantName">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    type="text"
                    id="Name"
                    //   placeholder="Enter Your name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    type="email"
                    id="Email"
                    //   placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-lg font-bold mb-2" htmlFor="contactNumber">
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    type="password"
                    id="contactNumber"
                    //   placeholder="Enter contact number"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-lg font-bold mb-2" htmlFor="foodType">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    type="password"
                    id="foodType"
                    //   placeholder="Enter type of food"
                    value={Conpassword}
                    onChange={(e) => setConpassword(e.target.value)}
                    required
                  />
                </div>

              </div>
              <div className="flex items-center justify-center ">
                {/* <Link href="/"> */}

                <button
                  className="bg-black hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
                {/* </Link> */}
              </div>

            </form>
          </div>
        </div>

      </div>
      {/* <Navbar />
    <div className='min-h-screen bg-white flex flex-col  items-center justify-center'>
   
        <div className='text-3xl text-white font-serif m-3 p-3 bg-black'>3D MODEL WEBSITE</div>
   
      <div className="max-w-3xl w-full p-6 bg-green-400 rounded shadow-md">
   
      </div>
    </div> */}
    </>

  );
};

export default RegistrationPage;