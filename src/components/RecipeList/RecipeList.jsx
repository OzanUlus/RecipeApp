import React from 'react'
import "./RecipeList.css"
import RecipeCard from '../RecipeCard/RecipeCard'

export const RecipeList = ({recipes}) => {
  return (
    <div className='recipeList'>
    {recipes.map((recipe) => (
      <RecipeCard 
        key={recipe.id}
        imageUrl={recipe.image}
        name={recipe.title}
        description={recipe.description}
      />
    ))}
  </div>
  )
}

export default RecipeList
