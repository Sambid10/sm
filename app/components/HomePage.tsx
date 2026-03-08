"use client"
import React from 'react'
import { motion } from "motion/react"
import { X, Minimize } from 'lucide-react';
export default function HomePage() {
    return (
        <div className=' min-h-screen mt-32 md:mt-25 lg:mt-20 max-w-277 px-6 md:px-4 lg:px-0 flex flex-col gap-12 mx-auto w-full  justify-center text-[#747FE0]'>
            <div className='flex items-center gap-5'>
                <h1 className=' text-4xl md:text-6xl lg:text-7xl font-inc font-medium '>&gt; &nbsp;Smarika Shk </h1>
                <motion.div
                    animate={{ opacity: [0, 0, 1, 1] }}
                    transition={{
                        duration: 0.8,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    className='bg-[#747FE0] w-3 md:w-4 h-10 md:h-13 lg:h-15'>
                    <h1>{""}</h1>
                </motion.div>
            </div>

            <section className='text-xl md:text-2xl font-light  text-[#2e2e2e] tracking-tighter flex flex-col gap-2 md:gap-3'>
                <h1
                >Hi, I'm Smarika Shakya.</h1>
                <p>Student • UI Designer • Figma • Marketing</p>
                <span className='flex items-center gap-2'><h1>Check out my</h1> <a
                href='#project'
                className='font-normal text-[#747FE0]'>Projects.</a></span>

            </section>

            <div className='h-fit shadow-xl'>
                <div className='h-8 bg-gray-100 border border-gray-700 w-full flex justify-between'>
                    <div>
                        <h1>{""}</h1>
                    </div>
                    <div className='flex'>
                        <div className='h-full flex items-center justify-center text-black w-9 border-l border-black'>
                            <h1>_</h1>
                        </div>
                        <div className='h-full flex items-center justify-center text-black w-9 border-l border-black'>
                            <Minimize className='size-4' />
                        </div>
                        <div className='h-full bg-red-300 flex items-center justify-center text-black  border-black w-9 border-l'>
                            <X className='size-5' />
                        </div>

                    </div>

                </div>
                <div className='bg-[#5A5D7A] py-4 px-4 md:py-8 md:px-8 text-gray-50 text-base font-inc text-[18px]'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h1>&gt; shk.location;</h1>
                            <h1 className='text-[#E6D083]'>["Imadol" , "Lalitpur"]</h1>
                        </div>
                        <div>
                            <h1>&gt; shk.education;</h1>
                            <h1 className='text-[#E6D083]'>"Bachelor of Information Management (BIM)"</h1>
                        </div>
                        <div>
                            <h1>&gt; shk.contact;</h1>
                            <div>
                                <h1 className='text-[#E6D083]'>"smarkiashk10@gmail.com"</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <h1>&gt;</h1>
                            <motion.div
                                animate={{ opacity: [0, 0, 1, 1] }}
                                transition={{
                                    duration: 0.8,
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                                className='bg-white w-3 h-7'>
                                <h1>{""}</h1>
                            </motion.div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
