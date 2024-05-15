"use client"
import React, { useState } from 'react';

const Hex = () => {
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

    const changeColors = () => {
        var hex_number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var hexCode = "#";

        for (var i = 0; i < 6; i++) {
            var random_index = Math.floor(Math.random() * hex_number.length);
            hexCode += hex_number[random_index];
        }

        setBackgroundColor(hexCode);
    };

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen gap-4' style={{ backgroundColor }}>
            <button onClick={changeColors} className='px-3 py-2 font-medium text-white bg-black rounded-lg'>
                Click Me!
            </button>
            <h1>{backgroundColor}</h1>
        </div>
    );
};

export default Hex;
