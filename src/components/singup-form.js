import React, { Component } from 'react';
import axios from 'axios';
import './Footer.css'

export default class singupform extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:'',
      email: '',
      errors:[]
    }
  }



  validate(){
    let username1 = this.state.username;
    let password1=this.state.password;
    let email1=this.state.email;
    let errors = {};
    let isValid = true;
 
    if (!username1) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (typeof username1 !== "undefined") {
      const re = /^\S*$/;
      if(username1.length < 3 || !re.test(username1)){
          isValid = false;
          errors["username"] = "Please enter valid username.";
      }
    }

    if (!email1) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof email1 !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email1)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!password1) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }


    if (typeof password1 !== "undefined") {
      if(password1.length < 6){
          isValid = false;
          errors["password"] = "Please add at least 6 charachter.";
      }
    }


    this.setState({
      errors: errors
    });

    return isValid;
}


  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.validate()){
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    console.log(user);

    axios.post('http://localhost:5000/foodies/add', user)
      .then(res => console.log(res.data))
      .catch(error => {
        this.setState({ username: "Choose a unique id" });
        console.error('There was an error!', error)});
      }
    this.setState({
      username: '',
      password: '',
      email: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
        <div class="form-group">
            <label for="username">Username:</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.username}
              onChange={this.onChangeUsername}
              class="form-control" 
              placeholder="Enter username" 
              id="username" />
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div>
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.email}
              onChange={this.onChangeEmail}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={this.onChangePassword}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}