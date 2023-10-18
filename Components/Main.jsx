'use client';

import React, { useEffect } from 'react'
import { montserrat, poppins, montserrat400, lato } from '@fonts/fonts'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoDiscord } from 'react-icons/io5'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

const Main = () => {
    const { data: session } = useSession();
    const router = useRouter();



    useEffect(() => {
        if (session?.user) {

            router.push('/dashboard')

        }

    }, [session?.user])



    return (


        <div className='main-right  flex  flex-col md:flex-row  bg-[#F8FAFF] '>

            <div className=' leftbox text-[#FFFFFF]'>
                <div className='flex justify-between h-screen flex-col py-12 px-20'>

                    <h1 className={`${poppins.className} text-[24px]`} >LOGO</h1>

                    <div className='mx-24'>
                        <h1 className={`${montserrat.className}  text-[72px]`} >Board.</h1>
                    </div>

                    <div className=' items-center flex justify-between w-56 mx-24 '>
                        <AiFillGithub size={30} cursor={"pointer"} />
                        <AiFillTwitterCircle size={30} cursor={"pointer"} />
                        <AiFillLinkedin size={30} cursor={"pointer"} />
                        <IoLogoDiscord size={30} cursor={"pointer"} />

                    </div>



                </div>
            </div>

            <div className='flex flex-col items-start  justify-center m-12' >

                <div className='flex flex-col justify-start'>
                    <h1 className={`${montserrat.className} text-[33px]`} >Sign In</h1>
                    <p className={`${lato.className} text-[16px]`} >Sign in to your account</p>
                </div>

                <div className='flex items-center justify-center m-8'>
                    <button className='flex items-center justify-center mr-12' onClick={() => {
                        signIn("google");
                    }}>
                        <FcGoogle size={20} className='mr-2' />
                        <p className={`${montserrat400.className}  bg-[#FFFFFF] text-[#858585] text-[12px]`}>Sign in with Google</p>
                    </button>
                    <button className='flex items-center justify-center bg-[#FFFFFF]'>
                        <BsApple size={20} color='#999999' className='mr-2' />
                        <p className={`${montserrat400.className} text-[#858585] text-[12px]`}>Sign in with Apple</p>
                    </button>
                </div>



                { /* Card  */}

                <form action="/" className='flex flex-col justify-center bg-[#FFFFFF]'>


                    <p className={`${lato.className} text-[16px] mb-2`}> Email address</p>
                    <input type="text" className='bg-[#EAEAEA] h-[43.91px] w-[356.77px]  outline-none border-none px-2 rounded-lg mb-4' />

                    <p className={`${lato.className} text-[16px] mb-2`}> Password</p>
                    <input type="password" className='bg-[#EAEAEA] h-[43.91px] w-[356.77px]  outline-none border-none px-2  rounded-lg mb-4' />


                    <a href="/" className={`text-[#346BD4] ${lato.className} text-[16px] hover:underline mb-4`}>Forgot Password?</a>

                    <button type='submit' className={`bg-[#4285F4] w-[356.77px h-[43.91px] rounded-xl mb-4 ${montserrat.className} text-[16px] text-[#FFFFFF]`}>  Sign In</button>
                </form>


                <p className={` text-[#858585]  ${lato.className}  mt-4 `}>Don't have an account? <a href="" className='text-[#346BD4] hover:underline '>Register here</a></p>
            </div>






        </div>


    )
}

export default Main