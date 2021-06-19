import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import Footer from './components/Footer.component'
import singupform from './components/singup-form';
function App() {
  return (
    <Router>
      <div className="container">
      <div className="page-container">
        <Navbar />
        <br/>
        <div className='content-wrap'>
          <Route path='/' exact component={ExercisesList} />
          <Route path='/edit/:id' component={EditExercise} />
          <Route path='/create' component={CreateExercise} />
          <Route path='/user' component={CreateUser} />
          <Route path= '/foodies/add' component={singupform} />
        </div>
          <Footer/>
      </div>
      </div>
    </Router>

  );
}

export default App;
