import React from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../../session_form/session_form_container';


class Nav extends React.Component {
  constructor(props) {
   super(props);
  }

  sessionLinks() {
    return(
      <SessionFormContainer />
    );
  }
  personalGreeting(currentUser, logout) {
    return(
      <hgroup className="nav-group">
        <h2 className="nav-name">Welcome, {currentUser.name}!</h2>
        <button className="nav-button" onClick={logout}>Log Out</button>
      </hgroup>
    );
  }

  render() {
    return(
      <div className="nav-whole-group">
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()}
      </div>
    );
  }
}

export default Nav;

