import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {

  state = {
    username: "",
    password: null,
    isValid: true
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.username) {
      this.setState({
        isValid: true
      });
      axios.post("/api/user", this.state)
        .then(res => this.props.history.push("/")) // redirect to home page
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
		return (
			<form>
  			Username:<br/>
  			<input type="text" name="username" onChange={this.onChange}/>
  			<br/>
  			Password:<br/>
  			<input type="password" name="password" onChange={this.onChange}/>
  			<br/><br/>
  			<input type="submit" onClick={this.onSubmit} value="Login"/>
			</form> 
		);
  }
}

export default Login;