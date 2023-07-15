import Link from 'next/link';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '/lib/withSession';




function Home({user}) {
  console.log("user",user.user.username)

  return  (
    <>
    <div className=' flex  flex-col bg-white   justify-between min-h-screen'>
    <Header name={user.user.username} />
    <div className='flex flex-col justify-center items-center'>
    <p className='text-center font-serif font-bold text-black text-3xl  p-3 rounded-lg'>All Chapters</p>
    <div className='flex justify-between lg:gap-20  lg:m-10 items-center'>
    <p className='flex-1 text-black w-[30rem] font-serif text-2xl h-80'>Chapter 1 introduces a variety of models representing different electronic devices. These models include Headphone, CCTV, Microphone, Printer, Mouse, Keyboard, Projector, and Speaker. Each model represents a specific device commonly used in various contexts. Throughout the chapter, you will explore these models and gain insights into their functionalities and applications.</p>
    <Link href="/chapter1">
      <div className=" flex-1 border border-black w-80 h-80  bg-blue-500 rounded-lg   flex items-center justify-center">
        <div className="text-white  text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">Chapter 1</h2>
        </div>
      </div>
    </Link>
    </div>
    <div className='flex justify-between lg:gap-20  lg:m-10 items-center'>
    
    <Link href="/chapter2">
      <div className=" border border-black  h-80 w-80 bg-blue-500 rounded-lg   flex items-center justify-center">
        <div className="text-white  text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">Chapter 2</h2>
        </div>
      </div>
    </Link>

    <p className='flex-1 text-black w-[30rem] font-serif text-2xl h-80'>Chapter 2 presents an assortment of new models showcasing various electronic devices. These models encompass GamePad, LED, USB, Webcam, Digital Camera, and Barcode Reader. Each model represents a specific device commonly utilized in different contexts. As you delve into this chapter, you will gain a deeper understanding of these models, their functionalities, and their wide-ranging applications.</p>

    </div>
   

    </div>
    <Footer />
    </div>
    
  </>
  )
}

export default Home;
export const getServerSideProps = withIronSessionSsr( function ({
    req,
    res,
}) {
    const user = req.session.user
    // console.log("hello")
    
 
    if (user === undefined) {
        res.setHeader('location', '/')
        res.statusCode = 302
        res.end()
        return {
            props: {
                user: { isLoggedIn: false,  email: '',name:'', }

            },
        }
    }



    return {
        
        props: { user: req.session.user,},
    
    }
},
sessionOptions)