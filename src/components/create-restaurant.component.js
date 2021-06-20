import React, { Component } from 'react';
import axios from 'axios';
import './Footer.css'

export default class createrestaurant extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name:'',
      location:'',
      image:'',
      password:'',
      errors:[]
    }
  }



  validate(){
    let name1 = this.state.name;
    let location1=this.state.location;
    let image1=this.state.image;
    let password1=this.state.password;
    let errors = {};
    let isValid = true;
 
    if (!name1) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (typeof name1 !== "undefined") {
      const re = /^\S*$/;
      if(name1.length < 3 || !re.test(name1)){
          isValid = false;
          errors["name"] = "Please enter valid name.";
      }
    }

    if (!location1) {
      isValid = false;
      errors["location"] = "Please enter your location.";
    }


    if (!image1) {
      isValid = false;
      errors["image"] = "Please enter your image link.";
    }


    if (typeof image1 !== "undefined") {
      if(image1.length < 6){
          isValid = false;
          errors["image"] = "Please enter valid image link.";
      }
    }

    if (!password1) {
      isValid = false;
      errors["password"] = "Please enter your password link.";
    }


    if (typeof password1 !== "undefined") {
      if(password1.length < 6){
          isValid = false;
          errors["password"] = "Please enter valid password link.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
}


  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onChangeImage(e) {
    this.setState({
      image: e.target.value
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
      name: this.state.name,
      location: this.state.location,
      image: this.state.image,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/restaurant/add', user)
      .then(res => console.log(res.data))
      .catch(error => {
        this.setState({ name: "Choose a unique name" });
        console.error('There was an error!', error)});
      }
    this.setState({
      name: '',
      location: '',
      image: '',
      password:''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Restaurant</h3>
        <form onSubmit={this.onSubmit}>
        <div class="form-group">
            <label for="name">Restaurant Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.name}
              onChange={this.onChangeName}
              class="form-control" 
              placeholder="Enter Restaurant Name" 
              id="username" />
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div>
          <div class="form-group">
            <label for="location">Email Location:</label>
            <input 
              type="text" 
              name="location" 
              value={this.state.location}
              onChange={this.onChangeLocation}
              class="form-control" 
              placeholder="Enter Location" 
              id="location" />
  
              <div className="text-danger">{this.state.errors.location}</div>
          </div>
          <div class="form-group">
            <label for="image">Email Image link:</label>
            <input 
              type="text" 
              name="image" 
              value={this.state.image}
              onChange={this.onChangeImage}
              class="form-control" 
              placeholder="Enter Location" 
              id="image" />
  
              <div className="text-danger">{this.state.errors.image}</div>
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
            <input type="submit" value="Create Restaurant" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}