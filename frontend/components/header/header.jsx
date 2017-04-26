import React from 'react';
import NavContainer from './nav/nav_container';
import {Link} from 'react-router';



const Header = ({children}) => (
    <header className="header-bar">

      <div className="logo-item"><Link to="/"><img src="http://res.cloudinary.com/candyentropy/image/upload/v1493100171/R2D2-128_dpposm_jq9nix.png" alt=""/></Link><Link to="/"><div className="logo-name">Air2d2</div></Link></div>
      <NavContainer />
    </header>
);

export default Header;
