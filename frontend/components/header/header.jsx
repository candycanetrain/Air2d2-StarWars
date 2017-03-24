import React from 'react';
import NavContainer from './nav/nav_container';
import {Link} from 'react-router';



const Header = ({children}) => (
    <header className="header-bar">
      
      <div className="logo-item"><Link to="/"><img src="http://res.cloudinary.com/candycanetrain/image/upload/v1490346885/R2D2-128_dpposm.png" alt=""/></Link><div className="logo-name">Air2d2</div> </div>
      <NavContainer />
    </header>
);

export default Header;