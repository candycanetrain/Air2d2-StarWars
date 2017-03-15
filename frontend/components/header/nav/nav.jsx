import React from 'react';
import {Link} from 'react-router';

const NavPanelButtons = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Sign Up</Link>
    <Link to="/signup" activeClassName="current">Login</Link>
  </nav>
);

const personalGreetingNav = (currentUser, logout) => (
  <hgroup className="nav-group">
    <h2 className="nav-name">Welcome, {currentUser.username}!</h2>
    <button className="nav-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Nav = ({currentUser, logout}) => (
  currentUser ? personalGreetingNav(currentUser,logout) : NavPanelButtons()
);

export default Nav;

