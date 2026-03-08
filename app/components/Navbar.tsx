import React from 'react'

export default function Navbar() {
    return (
        <nav className='max-w-312.5 px-6 md:px-4 lg:px-0 mx-auto absolute top-0 h-24 md:pr-16 text-2xl w-full flex items-center justify-between'>
            <h1 className='italic text-base  md:text-lg text-stone-700 font-medium'>@shk</h1>
            <a
            href='#project'
            className="relative cursor-pointer hover:text-[#747FE0] transition-all duration-50 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#747FE0] hover:after:w-full after:transition-all after:duration-300">
                <h1>Projects</h1>
            </a>
        </nav>
    )
}
