"use client"
import React, { useState } from 'react'

const Quote = () => {

    const [Quote, setQuote] = useState("GENERATE")
    const [Auth, setAuth] = useState("Free Programming Quotes Generator.")

    const fetchQuote = async () => {
        try {
            const response = await fetch("https://api.quotable.io/random")
            const data = await response.json()
            setQuote(data.content)
            setAuth(data.author)
        } catch (error) {
            console.error('Error fetching country data:', error);

        }
    }
    const Apicall = (e) => {
        e.preventDefault()
        fetchQuote()
    }

    return (


        <div className='flex flex-col items-center justify-center w-screen h-screen gap-5 bg-gray-200'>
            <div className='p-5 rounded-xl w-[500px] bg-white border-4 border-yellow-400 flex items-center justify-center flex-col gap-3'>
                <h1 className='text-xl font-bold text-center'> {Quote}</h1>
                <h1 className='text-lg font-medium text-center'>{Auth}</h1>
            </div>
            <div>
                <button onClick={Apicall} className='px-3 py-2 font-medium text-white duration-300 bg-black rounded-lg hover:bg-white hover:text-black'>GENERATE</button>
            </div>
        </div>
    )
}

export default Quote