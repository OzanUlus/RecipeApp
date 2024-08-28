import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import { RecipeList } from './components/RecipeList/RecipeList'
import { NewRecipeForm } from './components/NewRecipeForm/NewRecipeForm'
import axios from 'axios'

function App() {
 const [recipes,setRecipe] = useState([])

 useEffect(() =>{
    
    axios.get("http://localhost:3001/recipes").then((response) =>
        setRecipe(response.data))
    .catch(error => {
        console.log("Thre was an error while fetching the data" , error)
    } )
 },[])

 const handleAddRecipe = async (newRecipe) => {
     const response = await axios.post("http://localhost:3001/recipes",newRecipe)
    setRecipe([...recipes, response.data])
 } 
  
   

  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm addRecipe ={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </>
  )
}

export default App
