import { useContext} from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import { NewRecipeForm } from './components/NewRecipeForm/NewRecipeForm'
import { UserPreferenceContext } from './context/UserPreferenceContext'
import ApiContextProvider from './context/ApiContext'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { About } from './components/About/About'

function App() {
 

  const {theme} = useContext(UserPreferenceContext)

  return (
    <Router>
    <ApiContextProvider>
        <div className={`App ${theme}`} >
         <Header />
         <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/about' element ={<About  />} />
          <Route path='/addRecipe' element ={<NewRecipeForm  />} />
         </Routes>
        
       </div>
    </ApiContextProvider>
    </Router>
  )
}

export default App
