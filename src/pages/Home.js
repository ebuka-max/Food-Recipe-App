import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import RecipeItem from '../components/RecipeItem'

const Home = () => {

    const { recipeList, loading} = useContext(GlobalContext)

    if(loading) return <h1>loading ... Please wait!</h1>

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ?
            recipeList.map((food) => <RecipeItem key={food.id} food={food} />)
            :<div>
                <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show. Pleases Search something</p>
            </div>
        }
    </div>
  )
}

export default Home