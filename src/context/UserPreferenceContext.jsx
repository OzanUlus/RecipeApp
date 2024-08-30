import { createContext, useState } from "react";


export const UserPreferenceContext = createContext()

const UserPreferenceProvider = ({children}) => {
 const[theme , settheme] = useState("dark")
 const toggleTheme = () => settheme(theme === 'dark' ? 'light' : 'dark')

 return(
    <UserPreferenceContext.Provider value={{theme,toggleTheme}}>
        {children}
    </UserPreferenceContext.Provider>
 )

}
export default UserPreferenceProvider