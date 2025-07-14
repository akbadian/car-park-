import React from 'react'
import { Link } from 'react-router';
import { BiHome, BiLogIn, BiRegistered, BiSolidDashboard, BiSolidRegistered } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 shadow-lg flex items-center 
    justify-around py-3 px-32 fixed top-0 left-0 w-full'>
        <div className='flex items-center gap-5 text-black'>

            <Link to='/' className=' py-1 px-3 text-lg font-light 
            text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700'>
                <span className='font-semibold text-lg flex items-center
                 gap-3 text-blue-400 transition duration-300 ease-in-out'>
                <BiHome className='text-2xl' />
                <span className='font-semibold text-2xl'>Home</span>
                 </span>
            </Link>

            <Link to='/login' className=' py-1 px-3 text-lg font-light 
            text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700'>
                <span className='font-semibold text-lg flex items-center
                 gap-3 text-blue-400 transition duration-300 ease-in-out'>
                <BiLogIn className='text-2xl' />
                <span className='font-semibold text-2xl'>Login</span>
                 </span>
            </Link>

            <Link to='/register' className=' py-1 px-3 text-lg font-light 
            text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700'>
                <span className='font-semibold text-lg flex items-center
                 gap-3 text-blue-400 transition duration-300 ease-in-out'>
                <BiSolidRegistered className='text-2xl' />
                <span className='font-semibold text-2xl'>Register</span>
                 </span>
            </Link>

            <Link to='/dashbord' className=' py-1 px-3 text-lg font-light 
            text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700'>
                <span className='font-semibold text-lg flex items-center
                 gap-3 text-blue-400 transition duration-300 ease-in-out'>
                <BiSolidDashboard className='text-2xl' />
                <span className='font-semibold text-2xl'>Dashboard</span>
                 </span>
            </Link>
             
        </div>
    </nav>
  )
}

export default Navbar;