import React from 'react'

import { Roboto } from 'next/font/google'

// google font function create for single Page start
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})
// google font function create for single Page End



export const metadata = {
  title : "About",
  description : "About Page"
}

const page = () => {
  return (
    <div className={`${roboto.className} min-h-screen px-12 py-24`}>
      <h1 className='text-3xl'> It is about Page</h1>
     
    </div>
  )
}

export default page
