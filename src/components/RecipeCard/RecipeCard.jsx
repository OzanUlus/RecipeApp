import React from 'react'
import './RecipeCard.css'
import axios from 'axios'

export const RecipeCard = ({ image, title, description, id, onDelete  } ) => {

  const handleDelete = async (id) => {
 
     onDelete(id)
  }
  return (
    <div className='recipeCard'>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button className='update'>Güncelle</button>
    <button className='delete' onClick={() => handleDelete(id) }>Sil</button>
  </div>
  )
}
export default RecipeCard
