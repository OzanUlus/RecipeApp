import React from 'react'
import './NewRecipeForm.css'

export const NewRecipeForm = () => {
  return (
    <form>
        <h5>Tarif Ekleme</h5>
        <input placeholder='Tarif Adı'  />
        <input placeholder='Görsel Url' />
        <textarea placeholder='Açıklama' rows={3} />
        <button >Kaydet</button>
    </form>
  )
}

export default NewRecipeForm
