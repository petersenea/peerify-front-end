import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Assignments from './components/Assignments/Assignments';
import CourseHome from './components/CourseHome/CourseHome';
import GeneralHome from './components/GeneralHome/GeneralHome';
import Students from './components/Students/Students';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/course-home-page" exact component={CourseHome} />
          <Route path="/assignments" exact component={Assignments} />
          <Route path="/general-home-page" exact component={GeneralHome} />
          <Route path="/students" exact component={Students} />
          {this.props.children}
      </div>
      </Router>
    );
  }
}

export default App;