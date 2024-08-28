import React from 'react'
import './RecipeCard.css'
import axios from 'axios'

export const RecipeCard = ({ image, title, description, id, deleteRecipe  } ) => {

  const handleDelete = async (id) => {
 
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      console.log("Recipe deleted succesfully")
     } catch (error) {
      console.log("There was an error while deleting")
     }
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
