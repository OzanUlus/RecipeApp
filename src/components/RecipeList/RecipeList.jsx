import React from 'react'
import "./RecipeList.css"
import RecipeCard from '../RecipeCard/RecipeCard'

export const RecipeList = ({recipes, onDelete,onEdit}) => {
  return (
    <div className='recipeList'>
    {recipes.map((recipe) => (
      <RecipeCard 
        key={recipe.id}
        {...recipe}
        onDelete = {onDelete}
        onEdit={onEdit}
      />
    ))}
  </div>
  )
}

export default RecipeList
