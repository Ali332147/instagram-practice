import React from 'react'
import Image from 'next/image'
import { HomeIcon,PlusCircleIcon,HeartIcon } from '@heroicons/react/solid'
// import vercel from "../public/vercel.svg"

export default function Header() {
  return (
    <div className='flex items-center bg-white z-30 px-12 justify-between sticky top-0 shadow-sm border-b '>
{/* Left */}
<div className='w-24 h-24 relative cursor-pointer hidden lg:inline-grid'>
  <Image
  layout='fill'
  className='object-contain'
   src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
   alt="instagram"></Image>
</div>

<div className='w-10 h-24 relative cursor-pointer  lg:hidden'>
  <Image
  layout='fill'
  className='object-contain'
   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
   alt="instagram"></Image>
</div>
{/* Middle */}
<div className='relative items-center flex'>
  <div className='absolute top-4 right-2 '>
  <button className="ml-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  <input type="text" placeholder='Search' className="input input-bordered text-sm  " />
  
  </div>
{/* Right */}
<div className='flex items-center  '>
<HomeIcon className="text-gray-500 h-6 mr-4 cursor-pointer hover:scale-125 transition-transform-duration:200 ease-out"/>
<HeartIcon className="h-6 mr-4 text-gray-500 cursor-pointer hover:scale-125 transition-transform-duration:200 ease-out"/>
<PlusCircleIcon className="text-gray-500 h-6 mr-4 cursor-pointer hover:scale-125 transition-transform-duration:200 ease-out"/>
{/* <img src="jaberpic" alt="myPic"/> */}
<Image width={30} height={30} src='https://nypost.com/wp-content/uploads/sites/2/2022/05/zuckerberg-01.jpg?quality=75&strip=all&w=1024'className='rounded-full cursor-pointer hover:scale-125 transition-transform-duration:200' alt='pic'></Image>
</div>
    </div>
  )
}
