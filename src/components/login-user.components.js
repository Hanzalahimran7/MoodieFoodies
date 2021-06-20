import React, { Component } from 'react';
import axios from 'axios';
import './Footer.css'

export default class loginUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit= this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:'',
      errors:[],
      currentUser:'',
      users:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/foodies/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  


  validate(){
    let username1 = this.state.username;
    let password1=this.state.password;
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


  onSubmit(e) {
    e.preventDefault();
    if(this.validate()){
    const user = {
      username: this.state.username,
      password: this.state.password,
    }
    let users=this.state.users;

    console.log(user);

    users= users.filter(el => el.username === user.username);
    if (users.length>0){
        if (users[0].password===user.password){
            console.log(users[0]);}
            this.setState({
                username: '',
                password: '',
              })}
        else{
            this.setState({
                username: 'Incorrect Password',
                password: "",
            })
            console.log("Fuck off 2");
        }
    }
    else{
        console.log("Fuck off")
        this.setState({
            username: "Incorrect Username",
            password: '',
        })
    }
   
  }


  render() {
    return (
      <div>
        <h3>Login User</h3>
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
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}