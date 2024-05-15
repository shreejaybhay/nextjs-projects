"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Country = () => {
    const [country, setCountry] = useState("");
    const [countryData, setCountryData] = useState(null); // State to store the fetched country data

    const fetchData = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
            const data = await response.json();
            console.log(countryData);   
            setCountryData(data[0]); // Store the fetched country data in state
        } catch (error) {
            console.error('Error fetching country data:', error);
        }
    };

    const callApi = (e) => {
        e.preventDefault();
        fetchData();
        setCountry(""); // Clear the input field after fetching data
    };

    return (
        <div className='flex items-center justify-center w-screen h-screen bg-gray-200'>
            <div className='p-10 bg-white rounded-lg'>
                <form onSubmit={callApi} className='bg-white rounded-lg'>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Enter a country name here...' className='px-5 py-2 border-2 rounded-lg' />
                    <button type='submit' className='px-5 py-2 ml-2 font-medium text-white bg-blue-500 rounded-lg'>Search</button>
                </form>

                {countryData && ( // Render country data if available
                    <div className='p-5'>
                        <div className='flex items-center justify-center mb-5'>
                            {/* Render country flag */}
                            <Image src={countryData.flags.svg} alt='Country Flag' width={300} height={300} />
                        </div>
                        <h1 className='text-xl font-bold text-center'>{countryData.name.common}</h1>
                        <div className='flex flex-col gap-3 mt-5'>
                            <h1 className='font-bold'>Capital: <span className='font-medium'>{countryData.capital}</span></h1>
                            <h1 className='font-bold'>Continent: <span className='font-medium'>{countryData.region}</span></h1>
                            <h1 className='font-bold'>Population: <span className='font-medium'>{countryData.population}</span></h1>
                            <h1 className='font-bold'>Currency: <span className='font-medium'>{Object.values(countryData.currencies)[0].name}</span></h1>
                            <h1 className='font-bold'>Languages: <span className='font-medium'>{Object.values(countryData.languages).join(', ')}</span></h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Country;
