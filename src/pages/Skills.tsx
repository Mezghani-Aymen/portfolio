import React from 'react'

// @ts-ignore
import IconCloud from "@/components/magicui/icon-cloud";


const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "mongodb",
    "postman",
    "php",
    "laravel",
    "python",
    "mysql",
    "bootstrap",
    "tailwindcss",
    "C",
    "cplusplus",
    "cplusplus",
    "nestjs",
    "axios",
    "jquery",
];


export default function Skills() {
    return (
        <div className='flex justify-center items-center flex-col px-10 pt-[6rem]' id='skills'>
            <h1 className='text-[#D76B30] text-3xl ' data-aos="zoom-in">My knowledge</h1>
            <div data-aos="zoom-in" className=" relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  ">
                <IconCloud iconSlugs={slugs} />
            </div>
        </div>
    )
}

