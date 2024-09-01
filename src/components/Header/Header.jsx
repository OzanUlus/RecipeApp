import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    
         <nav className="navbar">
            <div className="logo">
                <a href="#">RecipeApp</a>
            </div>
            <ul className="nav-links">
                <li><Link to='/' >Anasayfa</Link></li>
                <li><Link  to='/about'>Hakımızda</Link></li>
                <li><Link  to='/addRecipe'>Tarif Ekle</Link></li>
                <li><Link >Profil</Link></li>
                <li><Link  to='/login'>Giriş Yap</Link></li>
            </ul>
        </nav>
    
  );
}

export default Header;

