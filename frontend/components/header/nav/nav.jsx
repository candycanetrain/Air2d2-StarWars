import React from 'react';
import {Link} from 'react-router';

const NavPanelButtons = () => (
  <nav className="navbar-login-signup">
    <ul className="nav items">
      <li><Link to="/signup" activeClassName="current">Sign Up</Link></li>
      <li><Link to="/login" activeClassName="current">Login</Link></li>
    </ul>
  </nav>
);

const personalGreetingNav = (currentUser, logout) => (
  <hgroup className="nav-group">
    <h2 className="nav-name">Welcome, {currentUser.name}!</h2>
    <button className="nav-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Nav = ({currentUser, logout}) => (
  currentUser ? personalGreetingNav(currentUser,logout) : NavPanelButtons()
);

export default Nav;

