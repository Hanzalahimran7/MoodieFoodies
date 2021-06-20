import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import Button from '@material-ui/core/Button';  
import Menu from '@material-ui/core/Menu';  
import MenuItem from '@material-ui/core/MenuItem';  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar'; 


export default class Navbar extends Component {

  render() {
    return (
      <section className="header">
      <nav>
        
      
  <div class="nav-link">
      <ul>
    
          <li><Link style= {{textdecoration: 'none', color: 'white'}} to ="/">
            <MenuItem>Exercise</MenuItem>
            </Link>
          </li>
          <li><Link style= {{textdecoration: 'none', color: 'white'}} to="/foodies/add">
          <MenuItem>Sign up</MenuItem>
            </Link></li>
          <li><Link style= {{textdecoration: 'none', color: 'white'}} to="/create">
          <MenuItem> Create Exercise log</MenuItem>
            </Link></li>
          <li><Link style= {{textdecoration: 'none', color: 'white'}} to="/user">
          <MenuItem>Create User</MenuItem>
            </Link></li>
            <li><Link style= {{textdecoration: 'none', color: 'white'}} to ="/restaurant/add">
            <MenuItem>Restaurant Signup</MenuItem>
          </Link></li>
          <li><Link style= {{textdecoration: 'none', color: 'white'}} to ="/restaurant/login">
          <MenuItem>Restaurant Login</MenuItem>
          </Link></li>
          <li><Link style= {{textdecoration: 'none', color: 'white'}} to ="/foodies/login">
          <MenuItem>Login</MenuItem>
            </Link></li>
          
          
          
      </ul>
  </div>
</nav>
</section>

      
      
    );
  }
}