import React from 'react'
import './RecipeCard.css'

export const RecipeCard = ({ imageUrl, name, description }) => {
  return (
    <div className='recipeCard'>
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
  )
}
export default RecipeCard
