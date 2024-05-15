"use client"
import React, { useState } from 'react';

const Dictionary = () => {
    const [data, setData] = useState("");
    const [apiData, setApiData] = useState(null); // Initialize apiData as null
    const [warn, setwarn] = useState("")

    const fetchData = async () => {
        try {

            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`);
            const responseData = await response.json();
            setApiData(responseData)

            // check if no definitions found
            if (responseData.title === "No Definitions Found") {
                setwarn("No Definitions Found")
            } else {
                setwarn("")
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const callApi = (e) => {
        e.preventDefault();
        fetchData();

    }

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <div className='bg-[#030712] p-5 rounded-lg'>
                <form onSubmit={callApi} className='bg-[#030712] rounded-lg'>
                    <input value={data} onChange={(e) => setData(e.target.value)} type="text" placeholder='Enter a word...' className='text-white px-5 py-2 w-[400px] bg-transparent border-2 border-gray-600 rounded-lg' />
                    <button type='submit' className='px-5 py-2 ml-2 font-medium text-white bg-blue-500 rounded-lg'>Search</button>
                </form>

                {apiData && (
                    <div className='w-full mt-5 text-xl font-bold text-white'>
                        <div className='px-10'>
                            <h1>{apiData[0]?.word}</h1>
                            <h1 className='font-medium text-white'>{warn}</h1>
                            <h1 className='text-sm font-normal text-gray-400'>{apiData[0]?.meanings[0].partOfSpeech}<span> {apiData[0]?.phonetic}</span></h1>
                        </div>
                        <div className='flex flex-col gap-5 mt-3'>
                            <p className='px-10 text-base font-normal'>{apiData[0]?.meanings[0].definitions[0].definition}</p>
                            <p className='px-10 text-base font-normal'>{apiData[0]?.meanings[0].definitions[0].example}</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Dictionary;
