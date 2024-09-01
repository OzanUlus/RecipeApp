import React, { useContext } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {

    const{isAuthenticated, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
      }
    
      const handleLogout = () => {
        logout()
        navigate('/login')
      }

  return (
    
         <nav className="navbar">
            <div className="logo">
                <a href="#">RecipeApp</a>
            </div>
            <ul className="nav-links">
                <li><Link to='/' >Anasayfa</Link></li>
                <li><Link  to='/about'>Hakımızda</Link></li>
                <li><Link  to='/addRecipe'>Tarif Ekle</Link></li>
                <li><Link  to='/profile'>Profil</Link></li>
                <button onClick={isAuthenticated ? handleLogout : handleLogin}>{isAuthenticated ? "Çıkış Yap" : "Giriş Yap"}</button>
            </ul>
        </nav>
    
  );
}

export default Header;

