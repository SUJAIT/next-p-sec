"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react'

const Header = () => {


    // navlinks management start

    const pathName = usePathname();

const links = [
    {
        title:'About',
        path : '/about' 
    },
    {
        title : "Contact",
        path : '/contact'
    },
    {
        title : "Home",
        path : '/home'
    },
    {
        title : "Post",
        path : "/posts"
    },
    {
        title : "Meals",
        path : "/meals"
    }

]
    // navlinks management end


  return (
    <div>
      <nav className='bg-red-500 px-6 py-4 flex justify-between items-center'>
<h6>Next <span className='text-yellow-200'>Data</span></h6>
      
      <ul className='flex justify-between items-center space-x-4'>
         {
            links?.map((link) => <Link className={`${pathName === link.path && "text-white"}`} key={link.path} href={link.path}>{link.title}</Link>)
         }
      </ul>
      <button className='bg-white text-cyan-400 p-4'>Login</button>
      </nav>
    </div>
  )
}

export default Header
