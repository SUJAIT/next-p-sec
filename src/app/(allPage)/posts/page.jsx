
import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title : {
            absolute:"Post"
    },
    description : "Post Page"
  }


const page = async () => {
    const postsData = await getPosts()
    console.log(postsData);

  return <div className='h-screen'>
      <h1 className='text-center'>All Post</h1>
      <div className='grid grid-cols-4 gap-6'>
        {
            postsData?.slice(0,20)?.map(({title,body, id}) => (
                <div key={id} className='border-2 p-6'>
                    <h6>Title : {title}</h6>
                    <h6><span className='font-bold text-lime-300'>Description :</span> {body}</h6>
                    <button className='bg-red-400 px-4 py-2'><Link href={`/posts/${id}`}>Details</Link></button>
                </div>
            ))
        }
      </div>
    </div>

}

export default page
