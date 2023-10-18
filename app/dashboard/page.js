import { montserrat, montserrat400 } from '@fonts/fonts';
import { AiOutlinePieChart, AiFillSchedule } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { LuTags } from 'react-icons/lu'
import Dashboard from '@Components/Dashboard';

const page = () => {
    return (
        <div className="flex  flex-col md:flex-row  my-1 mx-4">
            <div className="rounded-xl  bg-lg flex flex-col px-12 py-8">
                <div className={`${montserrat.className} text-[#FFFFFF] text-[36px]   mb-4`} >
                    <h1>Board.</h1>
                </div>
                <div className={`mt-8 flex flex-col justify-center ${montserrat400.className} text-[#FFFFFF] text-[18px] `}>

                    <div className='flex items-center  mb-6'>
                        <AiOutlinePieChart size={25} />
                        <p className='ml-4'>Dashboard</p>
                    </div>



                    <div className='flex items-center   mb-6'>
                        <LuTags size={25} color={`#FFFFFF`} />
                        <p className='ml-4' > Transactions</p>
                    </div>

                    <div className='flex items-center   mb-6'>
                        <AiFillSchedule size={25} color={`#FFFFFF`} />
                        <p className='ml-4'>Schedules</p>
                    </div>

                    <div className='flex items-center   mb-6'>
                        <BiUserCircle size={25} />
                        <p className='ml-4'>Users</p>
                    </div>
                    <div className='flex items-center   mb-6'>
                        <FiSettings size={25} />
                        <p className='ml-4'>Settings</p>
                    </div>



                </div>

                <div className={`h-[500px] flex  justify-end flex-col ${montserrat400.className} text-[#FFFFFF] text-[14px] `}>

                    <p className='mb-3'>Help</p>
                    <p>Contact us </p>
                </div>

            </div>

            <Dashboard />


        </div >
    )
}

export default page