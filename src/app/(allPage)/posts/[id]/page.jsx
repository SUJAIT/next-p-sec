
import React from 'react'


// dynamicData Get Function Start
const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}
// dynamicData Get Function End

// dynamic meta data set start

export const generateMetadata = async ({params}) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`)
 const postData = await res.json()
  return{
    title : `${postData.title}`,
    description : postData.body,
    keywords : postData.body
  }

}

// dynamic meta data set End



const postDetails = async ({params}) => {

    const {title,body} = await getDetailsPost(params.id)

  return (
    <div >
      <h6>Title : {title}</h6>
      <h5>Body : {body}</h5>
    </div>
  )
}

export default postDetails
