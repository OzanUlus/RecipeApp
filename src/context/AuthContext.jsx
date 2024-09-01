import { createContext, useState } from "react";


export const AuthContex = createContext()

export const AuthProvider = ({children}) => {
 const [isAuthenticated , setIsAuthenticated] = useState(false)

  const login = async(email,password) => {
    
  }

    return (
        <AuthContex.Provider>
            {children}
        </AuthContex.Provider>
    )
}