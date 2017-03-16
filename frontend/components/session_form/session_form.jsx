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
  componentWillReceiveProps(nextProps){
    if (nextProps.formType !== this.props.formType) {
      this.props.clearErrors([]);
    }
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
			return <button onClick={this.openModal.bind(this, 'signup')}>sign up instead!</button>;
    } else {
        return <button onClick={this.openModal.bind(this, 'login')}>Login instead!</button>;      
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
	}

	closeModal() {
		this.setState({modalOpen: false});
	}


  render() {
    return (
			<div>
        <nav className="login-signup">
					<button onClick={this.openModal.bind(this, 'login')}>Login</button>
					&nbsp;or&nbsp;
					<button onClick={this.openModal.bind(this, 'signup')}>Sign up!</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
					Welcome to Air2d2!
					<br/>
					<br/>

					Please {this.state.modalType} or {this.navLink()}
					<form onSubmit={this.handleSubmit} >
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label> Name: 
								<input type="text"
									value={this.state.name}
									onChange={this.update("name")}
									className="login-input" />
							</label>
              <br />
							<label> Email: 
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input" />
							</label>
							<br/>
              <label> Password: 
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input type="submit" value="Submit" />
						</div>
					</form>
				</Modal>
			</div>
    );
  }
}

export default SessionForm;