"use client"
import Link from 'next/link'
import React from 'react'
const projects = [
    {
        id: 1,
        images: [
            { src: "/1.jpg", title: "Image 1" },
            { src: "/2.jpg", title: "Image 2" },
            { src: "/3.png", title: "Image 3" },
            { src: "/4.png", title: "Image 4" },
            { src: "/5.png", title: "Image 5" },
        ],
        title: "Project 1",
        description: "lorem",
        link:"https://www.figma.com/proto/hk54fihO6GISFDyuaK4Ws5/Ecommerce-project?node-id=12-2&p=f&t=am0dkeRbjDPFK7qg-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A2"
    },
     {
        id: 2,
        images: [
            { src: "/7.png", title: "Image 1" },
            { src: "/8.jpg", title: "Image 2" },
            { src: "/9.jpg", title: "Image 3" },
        ],
        title: "Project 2",
        description: "lorem",
        link:"https://www.figma.com/proto/R4ySHOOXLZWerKHNHhA4St/Project?node-id=2-4&p=f&t=QT4hV5AyOsYEDsWU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
    },
    {
        id: 3,
        images: [
            { src: "/10.png", title: "Image 1" },
            { src: "/11.png", title: "Image 1" },
             { src: "/12.png", title: "Image 1" },
              { src: "/13.jpg", title: "Image 1" },
        ],
        title: "Project 3",
        description: "lorem",
        link:"https://www.figma.com/proto/ecdINoFNrY12UvYto3Itqx/smarika?node-id=1-2&p=f&t=7Z0XxIPZTzZ2kOwc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
    }
]
import {Carousel} from "../../components/ui/carousel"
export default function Projects() {
    return (
        <div 
        id='project'
        className='min-h-screen px-6 md:px-4 lg:px-0 mt-20 md:mt-0 font-inc text-3xl max-w-277  mx-auto  font-medium flex flex-col items-start  w-full '>
            <h1 className='tracking-tight text-[#747FE0] text-4xl'>&gt; Projects</h1>
            <div className='flex flex-col gap-4 mt-20 w-full'>
                {projects.map((pro) => (
                    <div
                        key={pro.id}
                        className="  flex  md:flex-row flex-col overflow-hidden relative w-full  py-4"
                    >
                        {/* Carousel section (1/3 width) */}
                        <div className="w-full md:w-[60%] relative z-0">
                            <Carousel
                            key={`carousel-${pro.id}`}
                                slides={pro.images.map((img) => ({
                                    src: img.src,
                                    title: img.title || '',
                                }))}
                            />
                        </div>

                        {/* Sidebar section (2/3 width) */}
                        <div className="w-full md:w-[40%] py-8 md:py-0 flex  flex-col items-center justify-center relative z-20 bg-[#F6F9FC] border border-gray-200 shadow-sm rounded-md ">
                            <h1 className="text-lg font-semibold">{pro.title}</h1>
                            <ul className='mt-2'> 
                                <li>{pro.description}</li>
                            </ul>
                            
                                <Link
                                target='_blank'
                                className='bg-[#747FE0] mt-2 hover:brightness-110 transition-all ease-in duration-100 text-amber-50 rounded-md text-xl py-2 px-6 font-medium'
                                href={pro.link}
                                >
                                    <h1>Visit</h1>
                                </Link>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
