"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Movies = () => {

    const [Movie, setMovie] = useState("")
    const [apiKEY, setapiKEY] = useState("35de4cfa")
    const [movieData, setmovieData] = useState(null)
    const [warn, setwarn] = useState("")

    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${Movie}&apikey=${apiKEY}`);
            const data = await response.json();
            console.log(data);
            setmovieData(data)

            // Check if the response is 'False'
            if (data.Response === 'False') {
                setwarn("Please enter a valid movie name");
                setmovieData(null); // Clear movieData to ensure previous data isn't displayed
            } else {
                setmovieData(data);
            }
        } catch (error) {
            console.error('Error fetching country data:', error);
        }
    }

    const callApi = (e) => {
        e.preventDefault()
        fetchData()
        setwarn("")
        setMovie("")
        console.log(Movie);
    }

    return (
        <div className='flex items-center justify-center w-screen h-screen bg-white'>
            <div className='p-10 bg-[#030712] rounded-lg'>
                <form onSubmit={callApi} className='bg-[#030712] rounded-lg'>
                    <input value={Movie} onChange={(e) => setMovie(e.target.value)} type="text" placeholder='Enter a movie name...' className='text-white px-5 py-2 w-[400px] bg-transparent border-2 border-gray-600 rounded-lg ' />
                    <button type='submit' className='px-5 py-2 ml-2 font-medium text-white bg-blue-500 rounded-lg'>Search</button>
                </form>
                <div className='mt-5 text-lg font-medium text-white'>
                    <h1>{warn}</h1>
                </div>
                {movieData && (
                    <div>
                        <div className='grid grid-cols-2 mt-5 bg-[#030712]'>
                            <div className=''>
                                <Image width={200} height={200} src={movieData.Poster} alt="" />
                            </div>
                            <div className='flex flex-col items-center justify-center text-white'>
                                <h1 className='text-2xl font-bold'>{movieData.Title}</h1>
                                <p className='text-lg'>{movieData.imdbRating}</p>
                                <h1 className='text-gray-500'>{movieData.Rated} <span>{movieData.Year}</span> <span>{movieData.Runtime}</span></h1>
                                <div className='flex gap-4 mt-5'>
                                    {movieData.Genre && movieData.Genre.split(', ').map((genre, index) => (
                                        <span key={index} className='px-3 py-2 border rounded-lg'>{genre}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='w-[400px] text-white flex flex-col gap-5 mt-5'>
                            <div>
                                <h1 className='text-xl font-bold'>Plot :</h1>
                                <p className='text-gray-300'>{movieData.Plot}</p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>cast :</h1>
                                <p className='text-gray-300'>{movieData.Actors}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Movies