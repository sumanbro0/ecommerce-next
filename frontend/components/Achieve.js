import React from 'react'
import { FaCogs, FaHome, FaMinus, FaPlus } from 'react-icons/fa';
import CountUp from 'react-countup';


const Achieve = () => {
    return (
        <div className='h-[100vh] m-auto w-[80%] flex flex-col'>
            <h1 className="text-6xl text-center mt-8  font-extrabold">OUR ACHIEVEMENTS</h1>
            <div className="flex justify-between   pt-4 content-center ">
                <div className="sales shadow-xl shadow-gray-400 text-start w-[23%] h-[100%] border-[1px] flex flex-col justify-between border-[#ac7c2d] items-start border-sm mt-8 ">
                    <div className="p-4">
                        <FaPlus className='text-black p-4 shadow-md shadow-gray-400 rounded-full border-2 border-black text-8xl' />
                        <h1 className='uppercase font-[700] text-[72px]'><span className='text-[#ac7c2d]'>
                            <CountUp end={80} duration={3} />
                        </span>k</h1>
                        <p className='text-[#ac7c2d] text-[25px] font-[600]'>Sales</p>
                        <p className="text-md font-light">Turpis egestas sed
                        </p>
                    </div>
                </div>
                <div className="sales shadow-xl shadow-gray-400 text-start w-[23%] h-[100%] border-[1px] flex flex-col justify-between border-[#ac7c2d] items-start border-sm mt-8 ">
                    <div className="p-4">
                        <FaMinus className='text-black p-4 shadow-md shadow-gray-400 rounded-full border-2 border-black text-8xl' />
                        <h1 className='uppercase font-[700] text-[72px]'><span className='text-[#ac7c2d]'>
                            <CountUp end={10} duration={3} />
                        </span>k</h1>
                        <p className='text-[#ac7c2d] text-[25px] font-[600]'>Flavours</p>
                        <p className="text-md font-light">Non enim praesent
                        </p>
                    </div>
                </div>
                <div className="sales shadow-xl shadow-gray-400 text-start w-[23%] h-[100%] border-[1px] flex flex-col justify-between border-[#ac7c2d] items-start border-sm mt-8 ">
                    <div className="p-4">
                        <FaHome className='text-black p-4 shadow-md shadow-gray-400 rounded-full border-2 border-black text-8xl' />
                        <h1 className='uppercase font-[700] text-[72px]'><span className='text-[#ac7c2d]'>
                            <CountUp end={15} duration={3} />
                        </span>k</h1>
                        <p className='text-[#ac7c2d] text-[25px] font-[600]'>Branches</p>
                        <p className="text-md font-light">Libero volutpat sed cras
                        </p>
                    </div>
                </div>
                <div className="sales shadow-xl shadow-gray-400 text-start w-[23%] h-[100%] border-[1px] flex flex-col justify-between border-[#ac7c2d] items-start border-sm mt-8 ">
                    <div className="p-4">
                        <FaCogs className='text-black p-4 shadow-md shadow-gray-400 rounded-full border-2 border-black text-8xl' />
                        <h1 className='uppercase font-[700] text-[72px]'><span className='text-[#ac7c2d]'>
                            <CountUp end={50} duration={3} />
                        </span>k</h1>
                        <p className='text-[#ac7c2d] text-[25px] font-[600]'>Customers</p>
                        <p className="text-md font-light">Massa sapien faucibus
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Achieve