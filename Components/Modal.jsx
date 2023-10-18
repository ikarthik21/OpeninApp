'use client';

import React, { useState } from 'react'
import { figtree, figtree400 } from '@fonts/fonts'
import { GrClose } from 'react-icons/gr'

const Modal = ({ isOpen, onClose, user, setUser }) => {


    const [social, setSocial] = useState(false);

    const readInp = (e) => {

        console.log(e.target.name + "->" + e.target.value)


        setUser({ ...user, [e.target.name]: e.target.value })
        console.log({ ...user, [e.target.name]: e.target.value });
    }




    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto ">

            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Background overlay with a blur effect */}

                <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>


                <div className="flex  flex-col relative top-32 left-[35vw] align-bottom bg-[#FFFFFF] rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top w-[450px] p-4 " >



                    <div className='flex items-center justify-between mb-2 border-b-2 pb-3 '>
                        <h1 className={`${figtree.className} text-[20px]`}>Add New Profile</h1>
                        <p onClick={onClose} className='cursor-pointer '><GrClose color="#F2F2F2" size={20} /></p>
                    </div>

                    <div className='flex items-center  justify-around mt-4' >

                        <div className='flex flex-col h-4  mr-4 items-center justify-center cursor-pointer '>

                            <h1 className={`${figtree.className}  text-[16px] mb-2 `}>Basic</h1>

                            <div className='border-blue-500  w-40 rounded border-b-4'></div>
                        </div>




                        {social ? <div className='flex flex-col h-4 ml-4 items-center justify-center cursor-pointer'>

                            <h1 className={`${figtree.className}  text-[16px] mb-2 `}>Social</h1>

                            <div className='border-blue-500  w-40 rounded border-b-4'></div>
                        </div> :
                            <div className='flex flex-col h-4 ml-4 items-center justify-center cursor-pointer'>

                                <h1 className={`${figtree.className}  text-[16px] mb-2 `}>Contact</h1>

                                <div className='border-blue-500  w-40 rounded border-b-4'></div>
                            </div>



                        }


                    </div>


                    {social ? <div className='p-2  mt-4'>

                        <div className={`${figtree400.className} text-[16px] mt-4`}>
                            <h1>Enter Instagram  <span>( optional )</span> </h1>
                            <input type="text" className={` ${figtree400.className} mt-2 w-[400px] 
            border-2 border-[#e4e3e3] outline-none rounded-md px-2 py-2`}
                                placeholder='Eg. .instagram/username' name='insta' onChange={readInp} value={user.insta} />
                        </div>
                        <div className={`${figtree400.className} text-[16px] mt-4`}>
                            <h1>Enter Youtube  <span>( optional )</span> </h1>
                            <input type="text" className={` ${figtree400.className} mt-2 w-[400px] 
            border-2 border-[#e4e3e3] outline-none rounded-md px-2 py-2`}
                                placeholder='Eg. .youtube/username ' name='youtube' onChange={readInp} value={user.youtube} />
                        </div>


                        <div className='flex items-center justify-end mt-4'>
                            <button onClick={() => { setSocial(false) }} className={`${figtree.className} text-[14px]   bg-[#e3e2e2]  px-4 py-2 text-black rounded-lg`}>Back</button>
                            <button onClick={onClose} className={`${figtree.className} text-[14px] text-[#FFFFFF] bg-[#3E84F8]  px-4 py-2 rounded-lg ml-4 `}>Done</button>
                        </div>

                    </div>
                        :
                        <div className='p-2  mt-4'>

                            <div className={`${figtree400.className} text-[16px] mt-4`}>
                                <h1>Enter Name <sup>*</sup> </h1>
                                <input type="text" className={` ${figtree400.className} mt-2 w-[400px] 
            border-2 border-[#F2F2F2] outline-none rounded-md px-2 py-2`}
                                    placeholder='Eg.  John Doe' name='name' onChange={readInp} value={user.name} />
                            </div>

                            <div className={`${figtree400.className} text-[16px] mt-4`}>
                                <h1>Enter Email <sup>*</sup> </h1>
                                <input type="text" className={` ${figtree400.className} mt-2 w-[400px] 
            border-2 border-[#F2F2F2] outline-none rounded-md px-2 py-2`}
                                    placeholder='Eg. John@xyz.com' name='email' onChange={readInp} value={user.enail} />
                            </div>
                            <div className={`${figtree400.className} text-[16px] mt-4`}>
                                <h1>Enter Phone <sup>*</sup> </h1>
                                <input type="text" className={` ${figtree400.className} mt-2 w-[400px] 
            border-2 border-[#F2F2F2] outline-none rounded-md px-2 py-2`}
                                    placeholder='Eg. 9999988888' name='phone' onChange={readInp} value={user.phone} />
                            </div>


                            <div className='flex items-center justify-end mt-4'>
                                <button onClick={() => { setSocial(true) }} className={`${figtree.className} text-[14px] text-[#FFFFFF] bg-[#3E84F8]  px-4 py-2 rounded-lg`}>Next</button>
                            </div>

                        </div>
                    }


                </div>




            </div>
        </div >
    );
};

export default Modal;
