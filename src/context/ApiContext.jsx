import axios from "axios"
import { createContext, useEffect, useState } from "react"


 export const ApiContext = createContext() 

 const ApiContextProvider = ({children}) => {

    const [recipes,setRecipe] = useState([])

    
   useEffect(() =>{
    const fetchRecipe =async () => {
        await axios.get("http://localhost:3001/recipes").then((response) =>
           setRecipe(response.data))
       .catch(error => {
           console.log("Thre was an error while fetching the data" , error)
       } )
       }

    fetchRecipe()
     
   },[])
  
   const addRecipe = async (newRecipe) => {
      try {
          const response = await axios.post("http://localhost:3001/recipes", newRecipe);
          setRecipe((prevRecipes) => [...prevRecipes, response.data]);
      } catch (error) {
          console.error("Thre was an error while:", error);
      } 
      
  };
  
  const deleteRecipe = async (id) =>{
  
      try {
          await axios.delete(`http://localhost:3001/recipes/${id}`);
          console.log("Recipe deleted succesfully")
         } catch (error) {
          console.log("There was an error while deleting")
         }
         setRecipe(recipes => recipes.filter(recipe => recipe.id !== id))
  }
  
  const updateRecipe = async (id,{title,description,image}) =>{
    try {
         await axios.put(`http://localhost:3001/recipes/${id}`,{title,description,image})
       .then(res =>setRecipe((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === id ? res.data : recipe
        )))
    } catch (error) {
       console.log("There was an error while editing.",error)
    }
 }

 const contextValues = {
    recipes, 
    addRecipe,
    deleteRecipe,
    updateRecipe
    
  };
   return <ApiContext.Provider value={contextValues}>
    {children}
   </ApiContext.Provider>
}
  export default ApiContextProvider
