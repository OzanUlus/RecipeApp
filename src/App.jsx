import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import { RecipeList } from './components/RecipeList/RecipeList'
import { NewRecipeForm } from './components/NewRecipeForm/NewRecipeForm'
import axios from 'axios'
import { UserPreferenceContext } from './context/UserPreferenceContext'
import ApiContextProvider from './context/ApiContext'

function App() {
 

  const {theme} = useContext(UserPreferenceContext)

  return (
    <ApiContextProvider>
        <div className={`App ${theme}`} >
         <Header />
         <Home />
         <NewRecipeForm  />
         <RecipeList />
       </div>
    </ApiContextProvider>
  )
}

export default App
