"use client"
import React, { useState } from 'react';
import { fetchData } from '@/app/api/Joke Api/JokeApi';

const Joke = () => {
    const [data, setData] = useState({ joke: 'Programming Jokes', setup: '', delivery: '' });

    const getData = async () => {
        try {
            const result = await fetchData();
            setData(result);
            console.log(result); // Log the result after setting the state
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen gap-5 bg-gray-200'>
            <div className='p-5 rounded-xl w-[700px] bg-white border-4 border-yellow-400 flex items-center justify-center flex-col gap-3'>
                <h1 className='text-xl font-bold text-center'>{data.joke}</h1>
                <h1 className='text-xl font-bold text-center'>{data.setup}</h1>
                <h1 className='font-normal text-center'>{data.delivery}</h1>
            </div>
            <div>
                <button onClick={getData} className='px-3 py-2 font-medium text-white duration-300 bg-black rounded-lg hover:bg-white hover:text-black'>GENERATE</button>
            </div>
        </div>
    );
};

export default Joke;
