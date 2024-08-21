


import Meals from '../components/Meals'

export const metadata = {
  title : "Meals",
  description : "Meals Page"
}

const MealsPage = () => {

    

  return (
    <div className='p-12'>
        <h1 className='text-3xl font-semibold text-red-400'>Choose Your Meals</h1>
      <p>Choose Meals of a choice by Searching</p>
    <Meals></Meals>
    </div>
  )
}

export default MealsPage
