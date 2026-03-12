import React from 'react'
import Image from 'next/image'
export default function Navbar() {
    return (
        <nav className='max-w-312.5 px-6 overflow-clip  md:px-4 lg:px-0   mx-auto absolute top-0 h-24  text-2xl w-full flex items-center justify-between'>
            <div className=''>
                <Image
                    src={"/logo1.png"}
                    height={120}
                    width={200}
                    alt='logo'
                    className='w-70 h-60 -ml-8'
                />
            </div>

            <a
                href='#project'
                className="relative cursor-pointer hover:text-[#747FE0] transition-all duration-50 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#747FE0] hover:after:w-full after:transition-all after:duration-300">
                <h1>Projects</h1>
            </a>
        </nav>
    )
}
