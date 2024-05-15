"use client"
import React, { useState } from 'react';

const Guess = () => {
    const [guess, setGuess] = useState("");
    const [Num, setNum] = useState("");
    const [Result, setResult] = useState("");

    const ranNum = Math.floor(Math.random() * 10);
    console.log(ranNum);

    const guessNum = (e) => {
        e.preventDefault();
        setGuess("");
        if (parseInt(guess) === ranNum) {
            setResult("Congratulations! You guessed the correct number.");
        } else {
            setResult(`Not matched, the number was ${ranNum}`);
        }
    };

    return (
        <div className='flex items-center justify-center w-screen h-screen bg-gray-200'>
            <form onSubmit={guessNum}>
                <input
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    type="text"
                    placeholder='Guess num between 0 to 9'
                    className='px-3 py-2 rounded-l-lg'
                />
                <button type='submit' className='px-3 py-2 text-white bg-black rounded-r-lg'>Submit</button>

                <div className='p-5 mt-5 font-medium bg-white rounded-lg'>
                    <h1>{Result}</h1>
                </div>
            </form>
        </div>
    );
};

export default Guess;
