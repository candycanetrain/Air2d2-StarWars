import React from 'react';
import NavContainer from './nav/nav_container';
import {Link} from 'react-router';



const Header = ({children}) => (
    <header className="header-bar">
      
      <div className="logo-item"><Link to="/"><img src="https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/R2D2-128.png" alt=""/></Link><div className="logo-name">Air2d2</div> </div>
      <NavContainer />
    </header>
);

export default Header;