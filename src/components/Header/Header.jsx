import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    
         <nav className="navbar">
            <div className="logo">
                <a href="#">RecipeApp</a>
            </div>
            <ul className="nav-links">
                <li><a href="#">Anasayfa</a></li>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Hizmetler</a></li>
                <li><a href="#">İletişim</a></li>
            </ul>
        </nav>
    
  );
}

export default Header;

