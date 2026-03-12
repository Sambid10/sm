"use client"
import React from 'react'
import Magnetic from './MagneticLink'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Email copied to Clipbaord');
export default function Footer() {
  const notify = () => {
  navigator.clipboard.writeText("smarikashakya09@gmail.com")
    .then(() => toast('Email copied to Clipboard.'))
    .catch(() => toast('Failed to copy email'));
}
  return (
    <div className='max-w-312.5 mx-auto py-16 font-inc flex flex-col items-center  gap-4'>
      <h1 className='font-medium text-[17px] text-[#121212]'>Connect Here:</h1>
      <div className='flex items-center gap-8'>
        <Magnetic>
          <Link
            target='_blank'
            href={"https://np.linkedin.com/in/smarika-shakya-452361257"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='#747FE0' className='hover:fill-[#0077B5] h-12  w-12z lg:h-16 lg:w-16 transition-colors duration-100 ease-in' viewBox="0 0 50 50" >    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg>
          </Link>

        </Magnetic>
        <Magnetic>
          <button onClick={notify}>
            <svg fill='#747FE0' viewBox="0 0 32 32" className='hover:fill-[#D44638] h-12  w-12 lg:h-16 lg:w-16 transition-colors duration-100 ease-in' version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>gmail</title>
              <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>
            </svg>
          </button>

        </Magnetic>
      </div>
      <h1 className='text-stone-600'>@2026</h1>
    </div>
  )
}
