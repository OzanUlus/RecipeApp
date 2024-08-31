import React from 'react'
import "./Home.css"
import RecipeList from '../RecipeList/RecipeList'


export const Home = () => {
  return (
      <>
      <div className='home'>
        <h3>RecipeApp'a Hoşgeldiniz</h3>
        <p>Bu uygulamada, en sevdiğiniz yemek tariflerini keşfedecek ve kendi benzersiz yemeklerinizin tariflerini paylaşabileceksiniz. </p>
        <p>Keyifli vakit geçirmenizi dileriz!</p>
        
    </div>
    <RecipeList />
      
      </>
      
    
    

  )
}
export default Home
