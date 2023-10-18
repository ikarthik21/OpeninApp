'use client';

import React, { useState } from 'react'
import { montserrat, lato, opensans, figtree, montserrat400 } from '@fonts/fonts';
import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import Modal from './Modal';
import DonutChart from './DonutChart';
import ColumnChart from './ColumnChart';

const UserProf = ({ user }) => {
    const trim_url = (url) => {

        if (url !== "") {
            const username = url.match(/\/([^/]+)\/$/)[1];

            return username;
        }


        return "";

    }

    return <>


        {/* User profile */}

        <div className='bg-[#fafafa]  h-[270px] w-[570px]  mt-4 rounded-3xl  border-[#E0E0E0] border-[2px]  flex-col flex  justify-between p-12 items-start ml-4' >

            <div className='flex items-center justify-start  ml-2'>
                <h1 className={`${figtree.className} text-[24px] text-left`}   >{user.name} </h1>
            </div>




            <div className='flex items-center  justify-between  mt-4  '>

                <div className='flex items-center'>
                    < Image src='/images/whatsapp.svg' height={25} width={25} color="#3CC952" className='bg-[#E9F9EB] p-1 rounded-full' alt='icon' />
                    <p className='ml-2 underline'>  {user.phone}</p>
                </div>

                <div className='flex items-center ml-8'>
                    < Image src='/images/insta.svg' height={25} width={25} color="#FFE9EC" className='bg-[#FFE9EC] p-1 rounded-full' alt='icon' />
                    <p className='ml-2 underline'> {trim_url(user.insta)}</p>

                </div>



            </div>

            <div className='flex items-center  justify-center mt-4 flex-wrap'>

                <div className='flex items-center mt-4'>
                    < Image src='/images/mail.svg' height={25} width={25} color="#EBE6F9" className='bg-[#EBE6F9] p-1 rounded-full' alt='icon' />
                    <p className='ml-2 underline'> {user.email}</p>

                </div>
                <div className='flex items-center ml-8  mt-4'>
                    < Image src='/images/youtube.svg' height={25} width={25} color="##FFE9E9" className='bg-[#FFE9E9] p-1 rounded-full' alt='icon' />
                    <p className='ml-2 underline'> {trim_url(user.youtube)}</p>
                </div>

            </div>











        </div >


    </>



}
const Dashboard = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const router = useRouter();

    const { data: session } = useSession();


    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        insta: "",
        youtube: ""

    })





    return (
        <div className='px-8 py-3 w-screen'>

            <div className='flex items-center justify-between'>


                <div>
                    <h1 className={`${montserrat.className} text-[24px]`}>Dashboard</h1>
                </div>




                <div className='flex items-center'>

                    <div className='flex items-center bg-slate-100    rounded-xl py-1'>

                        <input type="text" className={`text-[#B0B0B0] border-none outline-none  px-2 ${lato.className} text-[14px]  bg-slate-100   `} />

                        <AiOutlineSearch size={23} className='mr-2' />

                    </div>



                    <MdNotificationsNone size={25} className='mx-4 cursor-pointer' />

                    <div className='cursor-pointer'>
                        <Image src={session?.user ? session?.user?.image : "images/users.svg"} height={30} width={30} alt='profile' className='rounded-full' />

                        <p className='absolute right-14 bg-slate-200 p-2 rounded top-11' onClick={() => {
                            signOut({ redirect: false }).then(() => {
                                router.push("/");
                            });
                        }}  >Logout</p>
                    </div>



                </div>



            </div>






            <div className='flex items-center justify-between mt-4 flex-wrap'>

                <div className='flex flex-col bg-[#fafafa] rounded-3xl py-2 mt-3 px-4 border-[#E0E0E0] border-[2px] mr-4 min-w-[265px]'>
                    <Image src={"/images/revenue.svg"} height={35} width={35} alt='icon' className='bg-[#7FCD93] p-2 rounded-full' />

                    <p className={`${lato.className}  text-[11px] text-[#000000] mt-2 `}  >Total Revenues</p>

                    <div className='flex items-center justify-between'>
                        <p className={`${opensans.className} text-[21px] mr-8`}>$ 2,129,430</p>

                        <p className={`text-[#4AD15F] rounded-xl p-1 bg-[#E9F9EB] ${figtree.className} text-[10px]`}>+ 2.5%</p>
                    </div>
                </div>



                <div className='flex flex-col bg-[#fafafa] rounded-3xl py-2 mt-3  px-4 border-[#E0E0E0] border-[2px] mr-4 min-w-[265px]'>
                    <Image src={"/images/transactions.svg"} height={35} width={35} alt='icon' className='bg-[#DEBF85] p-2 rounded-full' />

                    <p className={`${lato.className}  text-[11px] text-[#000000] mt-2 `}  >Total Transactions</p>

                    <div className='flex items-center justify-between'>
                        <p className={`${opensans.className} text-[21px] mr-8`}>1,520</p>

                        <p className={`text-[#4AD15F] rounded-xl p-1 bg-[#E9F9EB] ${figtree.className} text-[10px]`}>+ 1.7%</p>
                    </div>
                </div>


                <div className='flex flex-col bg-[#fafafa] rounded-3xl py-2  px-4 mt-3 border-[#E0E0E0] border-[2px] mr-4 min-w-[265px]'>
                    <Image src={"/images/likes.svg"} height={35} width={35} alt='icon' className='bg-[#ECA4A4] p-2 rounded-full' />

                    <p className={`${lato.className}  text-[11px] text-[#000000] mt-2 `}  >Total Likes</p>

                    <div className='flex items-center justify-between'>
                        <p className={`${opensans.className} text-[21px] mr-8`}> 9,721</p>

                        <p className={`text-[#4AD15F] rounded-xl p-1 bg-[#E9F9EB] ${figtree.className} text-[10px]`}>+ 1.4%</p>
                    </div>
                </div>

                <div className='flex flex-col bg-[#fafafa] rounded-3xl  py-2 mt-3  px-4  border-[#E0E0E0] border-[2px] mr-4 min-w-[265px]'>
                    <Image src={"/images/users.svg"} height={35} width={35} alt='icon' className='bg-[#A9B0E5] p-2 rounded-full' />

                    <p className={`${lato.className}  text-[11px] text-[#000000] mt-2 `}  >Total Users</p>

                    <div className='flex items-center justify-between'>
                        <p className={`${opensans.className} text-[21px] mr-8`}>$ 2,129,430</p>

                        <p className={`text-[#4AD15F] rounded-xl p-1 bg-[#E9F9EB] ${figtree.className} text-[10px]`}>+ 4.2 %</p>
                    </div>
                </div>

            </div>




            <div className='bg-[#fafafa] rounded-3xl p-8 border-[#E0E0E0] border-[2px] mt-4 flex  flex-col '>

                <div className='flex justify-between mb-2'>
                    <div className='flex flex-col' >
                        <h1 className={`${montserrat.className} text-[18px]`}>Activities</h1>
                        <p className={`${montserrat400.className} text-[12px] text-[#858585]`}>May - June 2021</p>
                    </div>
                    <div className='flex items-center mr-4'>
                        <div className='flex items-center mr-4'>
                            <div className='rounded-full bg-[#EE8484] h-3 w-3 mr-2'></div>
                            <p className={`${lato.className} text-[14px]`}>Guest</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='rounded-full bg-[#98D89E] h-3 w-3 mr-2'></div>
                            <p className={`${lato.className} text-[14px]`}>User</p>
                        </div>
                    </div>

                </div>
                <ColumnChart />
            </div>


            <div className='flex items-center justify-between mt-4   flex-wrap  '>

                <div className='bg-[#fafafa]  rounded-3xl px-12 py-4 border-[#E0E0E0] border-[2px] mr-4 min-w-[550px]  '>


                    <div className='flex items-center justify-between'>

                        <h1 className={`${montserrat.className} text-[18px]`}>Top products</h1>

                        <p className={`text-[#858585] ${montserrat400.className} text-[12px]`}>May - June 2021</p>

                    </div>

                    <div className='flex items-center'>
                        <DonutChart />


                        <div className='flex-col flex ml-4'>

                            <div className='flex flex-col mb-4'>
                                <div className='flex items-center'>
                                    <div className='rounded-full bg-[#98D89E] h-3 w-3 mr-2'></div>
                                    <h1 className={`${montserrat.className} text-[14px]`}>Basic Tees</h1>
                                </div>
                                <p className={`${lato.className} text-[#858585] text-[12px] ml-4`}>55%</p>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <div className='flex items-center'>
                                    <div className='rounded-full bg-[#F6DC7D] h-3 w-3 mr-2'></div>
                                    <h1 className={`${montserrat.className} text-[14px]`}>Custom Short Pants</h1>
                                </div>
                                <p className={`${lato.className} text-[#858585] text-[12px] ml-4`}>31%</p>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <div className='flex items-center'>
                                    <div className='rounded-full bg-[#EE8484] h-3 w-3 mr-2'></div>
                                    <h1 className={`${montserrat.className} text-[14px]`}>Super Hoodies</h1>
                                </div>
                                <p className={`${lato.className} text-[#858585] text-[12px] ml-4`}>14%</p>
                            </div>
                        </div>



                    </div>



                </div>

                {user.name === "" ? <div className='h-[270px] w-[580px]  bg-[#fafafa]  rounded-3xl  p-4 border-[#E0E0E0] border-[2px]  flex-col flex items-center justify-center'>


                    <div className='bg-[#F2F2F2] p-3 rounded-full cursor-pointer' onClick={openModal}  >

                        <Image src={'/images/add.svg'} height={20} width={20} alt='icon' />

                    </div>
                    <p className={`${figtree.className} text-[16px] text-[#858585]`}> Add Profile</p>

                </div>
                    : <UserProf user={user} />
                }


            </div>





            <Modal isOpen={isModalOpen} onClose={closeModal} user={user} setUser={setUser} />


        </div >
    )
}

export default Dashboard