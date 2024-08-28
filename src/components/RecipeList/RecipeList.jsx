import React from 'react'
import "./RecipeList.css"
import RecipeCard from '../RecipeCard/RecipeCard'

export const RecipeList = ({recipes}) => {
  return (
    <div className='recipeList'>
    {recipes.map((recipe) => (
      <RecipeCard 
        key={recipe.id}
        {...recipe}
        deleteRecipe
      />
    ))}
  </div>
  )
}

export default RecipeList
