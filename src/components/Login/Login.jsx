import React, {  useState } from 'react'




export const Login = () => {
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")

   
    const handleLogin = async (e) => {
        e.preventDefault()

       
    }
  return (
    <div className="login-container">
    <h2>Giriş Yap</h2>
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email adresinizi girin"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
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
