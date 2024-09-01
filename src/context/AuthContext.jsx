import { createContext, useState } from "react";
import AuthService from "../services/AuthService";


export const AuthContex = createContext()

export const AuthProvider = ({children}) => {
 const [isAuthenticated , setIsAuthenticated] = useState(false)

  const login = async(email,password) => {
    try {
        const response = await AuthService.loginService(email,password)
        console.log(response)
            if(response.access_token){
                setIsAuthenticated(JSON.parse(localStorage.getItem("user")))
            }
        
    } catch (error) {
        setIsAuthenticated(false)
        return new Error(error)
    }
    
  }

  const logout = () => {
    AuthService.logoutService()
    setIsAuthenticated(false)
  }
  const value = {
    isAuthenticated,
    login,
    logout
  }

    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    )
}