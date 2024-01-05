import React, { useState } from 'react'
import { Cards_Details_Comp } from './Cards_Details_Comp';
import { Brand_Comp } from './Brand_Comp';
export const Cards_Comp = (props) => {
    const[showDetails,setShowDetails] = useState(false);
    // const Show_Details = ()=>{
    //     setShowDetails(true);
    // };
    return(        
        <div className='w-[80%] mx-auto md:flex space-y-4 gap-10 transition-all'>
            <div className='md:w-1/2 w-full hover:scale-105 card'>
                <img src={props.img1} alt="" />
                <div className="absolute opacity-0 hover:opacity-100 hover:bg-transparent w-64 h-96 bg-transparent flex item center justify-center bottom-1">
                <div className="flex flex-col p-5 justify-start absolute w-full space-y-5">
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-solid fa-plus"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-regular fa-heart"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"> <i class="fa-solid fa-retweet"></i></button>
                </div>
                </div>
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <p className='space-x-1 text-black'>$210.00</p>
                </div>
            </div>
            <div className='md:w-1/2 w-full hover:scale-105 card'>
                <img src={props.img2} alt="" />
                <div className="absolute opacity-0 hover:opacity-100 w-64 h-96 bg-transparent flex item center justify-center bottom-1">
                <div className="flex flex-col p-5 justify-start absolute w-full space-y-5">
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-solid fa-plus"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-regular fa-heart"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"> <i class="fa-solid fa-retweet"></i></button>
                </div>
                </div>
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <div className='flex space-x-2'>
                    <p className='space-x-1 text-black'>$210.00</p>
                    <s className='space-x-1 text-black'>$230.00</s>
                    </div>
                </div>
                {showDetails && <Brand_Comp/>}
            </div>
            <div className='md:w-1/2 w-full hover:scale-105 card'>
                <img src={props.img3} alt="" />
                <div className="absolute opacity-0 hover:opacity-100 w-64 h-96 bg-transparent flex item center justify-center bottom-1">
                <div className="flex flex-col p-5 justify-start absolute w-full space-y-5">
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-solid fa-plus"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-regular fa-heart"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"> <i class="fa-solid fa-retweet"></i></button>
                </div>
                </div>
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <p className='space-x-1 text-black'>$250.00</p>
                    
                </div>
            </div>
            <div className='md:w-1/2 w-full hover:scale-105 card'>
                <img src={props.img4} alt="" />
                <div className="absolute opacity-0 hover:opacity-100 w-64 h-96 bg-transparent flex item center justify-center bottom-1">
                <div className="flex flex-col p-5 justify-start absolute w-full space-y-5">
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-solid fa-plus"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"><i class="fa-regular fa-heart"></i></button>
                <button className="px-2 py-2 w-10 mt-10 bg-gray-300 hover:text-white rounded-full hover:bg-red-500"> <i class="fa-solid fa-retweet"></i></button>
                </div>
                </div>
                <div className='flex flex-col text-gray-500 space-y-1'>
                    <h1>Chair</h1>
                    <h1>Golden Easy Spot Chair.</h1>
                    <div className='flex space-x-2'>
                    <p className='space-x-1 text-black'>$320.00</p>
                    <s className='space-x-1 text-black'>$120.00</s>
                    </div>
                </div>
            </div>
        </div>
    )
}