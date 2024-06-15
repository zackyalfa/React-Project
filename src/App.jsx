import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar> </Navbar>
      <div className='from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen p-4'>
        <div className="bg-white border border-transparent shadow-lg rounded-3xl max-w-lg w-full p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <h4 className=' text-4xl font-extrabold mb-4'>Hello React</h4>
          <p className='text-lg text-blue-700 leading-relaxed mb-6'>
            A JavaScript library for building user interfaces
          </p>
          <Link to='https://legacy.reactjs.org/' className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-md hover:bg-purple-500 transition">
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
