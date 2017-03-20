import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      modalOpen: false,
      modalType: 'login'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

  }
 
  componentDidUpdate() {
		this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink(){
    if(this.state.modalType === "login") {
			return <button className="toggle-button" onClick={this.openModal.bind(this, 'signup')}>Sign up</button>;
    } else {
        return <button className="toggle-button" onClick={this.openModal.bind(this, 'login')}>Log in</button>;      
    }
  }

  toggleMessage(){
    if(this.state.modalType === "login") {
      return <div className="toggle-message">Don't have an account?</div>;
    } else {
      return <div className="toggle-message">Already have an Air2d2 account?</div>;      
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,i) => (
          <li key={`errors-${i} `}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestLogin(e){
    e.preventDefault();
    const demoGuest = {name: "Han Solo", email: "hansolo@air2d2.com", password: "chewbacca"};
    this.props.login(demoGuest);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.state.modalType === 'login') {
			this.props.login(user);
		} else {
			this.props.signup(user);
		}
  }

	openModal(modalType) {
		this.setState({
			modalOpen: true,
			modalType
		});
    this.props.clearErrors([]);
    
	}

	closeModal() {
		this.setState({modalOpen: false});
	}


  render() {
    return (
			<div>
        <nav className="login-signup">
          <button className="nav-button" onClick={this.openModal.bind(this, 'signup')}>Sign up</button>
					<button className="nav-button" onClick={this.openModal.bind(this, 'login')}>Login</button>
					
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
					<div className="welcome-message">Welcome to Air2d2!</div>
					<br/>
					<br/>
          <div className="login-signup-modal">
            <form onSubmit={this.handleSubmit} >
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                <div className="control-group">
                  <input placeholder="Name" type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    className="login-input" />
                </div>
                <br />
                <div className="control-group">
                  <input placeholder="Email Address" type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input" />
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    
                </div>
                <br/>
                <div className="control-group">
                  <input placeholder="Password" type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input" />
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </div>
                
                <br/>
                <div className="submit-button">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
            <div className="toggle-signup-login">
              <div className="toggle">{this.toggleMessage()}</div> 
              <div className="signup-demo">
                <div className="toggle">{this.navLink()}</div>
                <button className="toggle-button" onClick={this.guestLogin.bind(this)}>Log in as Demo</button>                            
              </div>
            </div>
          </div>
				</Modal>
			</div>
    );
  }
}

export default SessionForm;