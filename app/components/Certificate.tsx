import React from 'react'
import Image from 'next/image'
export default function Certificate() {
    return (
        <div
            className='h-fit px-6 py-12  md:px-4 lg:px-0  md:mt-0 font-inc text-3xl max-w-277  mx-auto  font-medium flex flex-col items-center  w-full '>
            <h1 className='tracking-tight text-[#747FE0] text-4xl text-left mr-auto'>&gt; Certificate</h1>
            <Image
            src={"/certi.jpg"}
            height={1024}
            width={729}
            alt='pic'
            className='mt-8 shadow-md'
            />
        </div>
    )
}
