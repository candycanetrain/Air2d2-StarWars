import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signup = SessionAPIUtil.signup;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Air2d2</h1>, root);
});