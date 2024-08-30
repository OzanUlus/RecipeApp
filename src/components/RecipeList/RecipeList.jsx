import React, { useContext } from 'react'
import "./RecipeList.css"
import RecipeCard from '../RecipeCard/RecipeCard'
import { ApiContext } from '../../context/ApiContext'

export const RecipeList = () => {
  const{recipes} = useContext(ApiContext)
  return (
    <div className='recipeList'>
    {recipes.map((recipe, index) => (
      <RecipeCard 
        key={index}
        {...recipe}
      />
    ))}
  </div>
  )
}

export default RecipeList
