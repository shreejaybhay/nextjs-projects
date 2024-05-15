"use client"
import React, { useState } from 'react'

const Counter = () => {
    const [num, setnum] = useState("0")

    const Increase = () => {
        const incrementedNum = (parseInt(num) + 1).toString();
        setnum(incrementedNum);
    }

    const Decrease = () => {
        setnum(num - 1)
    }
    const Reset = () => {
        setnum("0")
    }
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <div className='flex flex-col items-center justify-center gap-4 p-5 bg-gray-200 rounded-lg'>
                <h1 className='text-6xl font-bold text-gray-800'>COUNTER</h1>
                <p className='text-6xl font-bold text-gray-800'>{num}</p>
                <div className='flex gap-4'>
                    <button onClick={Increase} className='px-3 py-2 font-medium bg-transparent border-2 border-gray-500 rounded-lg'>Increase</button>
                    <button onClick={Reset} className='px-3 py-2 font-medium bg-transparent border-2 border-gray-500 rounded-lg'>Reset</button>
                    <button onClick={Decrease} className='px-3 py-2 font-medium bg-transparent border-2 border-gray-500 rounded-lg'>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export default Counter