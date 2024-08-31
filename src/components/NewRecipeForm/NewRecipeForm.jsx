import React, { useContext, useState } from 'react'
import './NewRecipeForm.css'
import { ApiContext } from '../../context/ApiContext';
import RecipeList from '../RecipeList/RecipeList';

export const NewRecipeForm = () => {
  const[title,setTitle] = useState("")
  const[image, setImage] = useState("")
  const[description, setDescription] = useState("")

  const[errors , setErrors] = useState({
    title : "",
    image : "",
    description : ""
  })

  const {addRecipe} = useContext(ApiContext)

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

  const handleInputChange = (setter, value) => {
    setter(value);
    validateForm();  // Her input değişiminde formu kontrol et
  };

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

    <>
      <form onSubmit={handleSubmit}>
      <h5>Tarif Ekleme</h5>
      <input
        type="text"
        value={title}
        onChange={(event) => handleInputChange(setTitle, event.target.value)}
        placeholder="Tarif Adı"
      />
      {errors.title && <span className="error">{errors.title}</span>}
      <input
        type="text"
        value={image}
        onChange={(event) => handleInputChange(setImage, event.target.value)}
        placeholder="Görsel Url"
      />
      {errors.image && <span className="error">{errors.image}</span>}
      <textarea
        value={description}
        onChange={(event) => handleInputChange(setDescription, event.target.value)}
        placeholder="Açıklama"
        rows={3}
      />
      {errors.description && <span className="error">{errors.description}</span>}
      <button type="submit">Kaydet</button>
    </form>
    <RecipeList />
    </>
    
    
  );
};


export default NewRecipeForm
