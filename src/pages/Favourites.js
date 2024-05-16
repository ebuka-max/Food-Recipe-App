import React, { useContext } from 'react'
import RecipeItem from '../components/RecipeItem'
import { GlobalContext } from '../context'

const Favourites = () => {

  const { favouritesList } = useContext(GlobalContext)

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            favouritesList && favouritesList.length > 0 ?
            favouritesList.map((food) => <RecipeItem key={food.id} food={food} />)
            :<div>
                <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing is added in favourites </p>
            </div>
        }
    </div>
  )
}

export default Favourites