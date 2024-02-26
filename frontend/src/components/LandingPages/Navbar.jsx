import React from 'react';
import {Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className='bg-black text-white py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div>
            {/* <img src="./logo192.png" alt="" /> */}
            <h1 className='font-bold text-xl'>RentalSphere</h1>
          </div>
          <div className='flex items-center space-x-8'>
            <nav>
              <ul className='flex space-x-4'>
                <li className='hover:text-red-600 font-extrabold'>Home</li>
                <li className='hover:text-red-600 font-extrabold'>About</li>
                <li className='hover:text-red-600 font-extrabold'>Contact</li>
              </ul>
            </nav>
            <div className='flex items-center space-x-4'>
              <button className='px-4 py-2 bg-gray-800  hover:bg-gray-600 text-white rounded-full font-semibold' onClick={()=>{
                navigate(`\login`);
              }}>Login</button>
              <button className='px-4 py-2 bg-gray-800  hover:bg-gray-600 text-white rounded-full font-semibold' onClick={()=>{
                navigate(`\signup`);
              }}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
