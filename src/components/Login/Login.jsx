import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


export const Login = () => {
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")

    const [login,isAuthenticated ] = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try{
            await login(email,password)
            navigate("/")
            console.log("handleLogin" + isAuthenticated)
            //navigate
        }catch(error){
            alert('login Failed')
            setEmail("")
            setPassword("")
        }
    }
  return (
    <div className="login-container">
    <h2>Giriş Yap</h2>
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email adresinizi girin"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifrenizi girin"
        />
      </div>
      <button type="submit" className="login-button">Giriş Yap</button>
    </form>
  </div>
  )
}
export default Login
