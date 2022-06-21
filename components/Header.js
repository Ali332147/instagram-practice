import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl'>
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
<h2>Right Side</h2>
{/* Middle */}
{/* Right */}
    </div>
  )
}
