
import React from 'react'

// dynamicData Get Function Start
const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}
// dynamicData Get Function End


const postDetails = async ({params}) => {

    const {title,body} = await getDetailsPost(params.id)

  return (
    <div>
      <h6>Title : {title}</h6>
      <h5>Body : {body}</h5>
    </div>
  )
}

export default postDetails
