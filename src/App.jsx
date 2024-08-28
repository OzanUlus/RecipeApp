import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import { RecipeList } from './components/RecipeList/RecipeList'
import { NewRecipeForm } from './components/NewRecipeForm/NewRecipeForm'

function App() {
 const [recipes,setRecipe] = useState([])

 useEffect(() =>{
    
    
    
    setRecipe(fakeRecipes)
    
 },[])
  


  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm />
      <RecipeList recipes={recipes} />
    </>
  )
}

export default App
