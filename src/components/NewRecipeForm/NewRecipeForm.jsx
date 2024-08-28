import React, { useState } from 'react'
import './NewRecipeForm.css'

export const NewRecipeForm = ({addRecipe}) => {
  const[title,setTitle] = useState("")
  const[image, setImage] = useState("")
  const[description, setDescription] = useState("")

  const handleSubmit =  (event) => {

    event.preventDefault()
     
    const newRecipe = {title,image,description}

    
       addRecipe(newRecipe);
      setDescription("")
      setImage("")
      setTitle("")
      

  }
  

  return (
    <form onSubmit={handleSubmit}>
        <h5>Tarif Ekleme</h5>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Tarif Adı'  />
        <input value={image} onChange={(event) => setImage(event.target.value)} placeholder='Görsel Url' />
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder='Açıklama' rows={3} />
        <button >Kaydet</button>
    </form>
  )
}

export default NewRecipeForm
