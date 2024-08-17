import Image from 'next/image'
import React from 'react'

const page = () => {

 

    return (
        <div className='min-h-screen px-12 py-24'>
            <h1 className='text-center text-3xl mb-12'>Gallery Page</h1>
            <div>
                {
[1,2,3,4,5,6,7]?.map((img) =>(
    <Image key={img} src={`/nextimg/${img}.png`} alt='' height="1080" width="1920"></Image>
))
                }
            </div>
        </div>
    )
}

export default page
