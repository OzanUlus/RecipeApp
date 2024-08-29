import React, { useState } from 'react'
import './NewRecipeForm.css'

export const NewRecipeForm = ({addRecipe}) => {
  const[title,setTitle] = useState("")
  const[image, setImage] = useState("")
  const[description, setDescription] = useState("")

  const[errors , setErrors] = useState({
    title : "",
    image : "",
    description : ""
  })

  const validateForm  = () => {
     let valid = true
     const newErrors = {title : "" , image : "" , description : ""}

     if(!title.trim()){
      newErrors.title = "Başlık boş bırakılmamalıdır."
      valid = false
     }

     if(!image.trim()){
      newErrors.image = "Görsel Url boş bırakılmamalıdır."
      valid = false
     }

     if(!description.trim()){
      newErrors.description = "Açıklama boş bırakılmamalıdır."
      valid = false
     }

     setErrors(newErrors)
     return valid
  }

  const handleSubmit = async (event) => {

    event.preventDefault()
     
    if (validateForm()) {
      const newRecipe = { title, image, description };

      await addRecipe(newRecipe);
      setTitle("");
      setImage("");
      setDescription("");
    }
      

  }
  

  return (
    <form onSubmit={handleSubmit}>
        <h5>Tarif Ekleme</h5>
        <input type='text' 
        value={title} 
        onChange={(event) => setTitle(event.target.value)} placeholder='Tarif Adı'  />
        {errors.title && <span className="error">{errors.title}</span>}
        <input type='text'
         value={image} 
         onChange={(event) => setImage(event.target.value)} placeholder='Görsel Url' />
         {errors.title && <span className="error">{errors.image}</span>}
        <textarea 
        type='text' 
        value={description} 
        onChange={(event) => setDescription(event.target.value)} placeholder='Açıklama' rows={3} />
        {errors.title && <span className="error">{errors.description}</span>}
        <button type='submit' >Kaydet</button>
    </form>
  )
}

export default NewRecipeForm
