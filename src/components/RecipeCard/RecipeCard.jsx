import React, { useState } from 'react'
import './RecipeCard.css'
import axios from 'axios'
import { EditRecipe } from '../EditRecipe/EditRecipe';


export const RecipeCard = ({ image, title, description, id, onDelete, onEdit  } ) => {
  const [isEdit, setIsEdit] = useState(false)
  const handleDelete = async (id) => {
 
     onDelete(id)
  }
  
  const startUpdate = () => {
    setIsEdit(true)
  }

  return (
    
      <div className="recipeCard">
          {isEdit ? (
              <EditRecipe 
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                  onEdit={onEdit}
                  onCancel={() => setIsEdit(false)} // Düzenleme işlemi iptal edildiğinde düzenleme modunu kapatır.
              />
          ) : (
              <>
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button className="update" onClick={startUpdate}>Güncelle</button>
                  <button className="delete" onClick={() => handleDelete(id)}>Sil</button>
              </>
          )}
      </div>
  );
};
    


export default RecipeCard
