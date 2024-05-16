import React from 'react'
import { Link } from 'react-router-dom'

const RecipeItem = ({food}) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={food?.image_url} alt='recipe food' className='block w-full'/>
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">{food?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">{food?.title}</h3>
        <Link to={`details/${food?.id}`} className='text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white' >Recie Details</Link>
      </div>
    </div>
  )
}

export default RecipeItem