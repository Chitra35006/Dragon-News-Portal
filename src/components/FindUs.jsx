import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className='mt-2 font-semibold'>Find Us On</h2>
            <div className='flex flex-col *:w-full mt-2 space-y-2'>
            <button className='btn border-gray-400 justify-start'><CiFacebook className='text-blue-700'></CiFacebook> Facebook</button>
            <button className='btn border-gray-400 justify-start'><FaTwitter className='text-cyan-300'></FaTwitter> Twitter</button>
            <button className='btn border-gray-400 justify-start'><FaSquareInstagram className='text-pink-400'></FaSquareInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;