
import React, {Component} from 'react';
import './css/intro.css';

import './css/intro_figure.css';
import './css/climb-content.css';
import './css/code-content.css';
import './css/navbar.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link} from 'react-scroll'


import Home from './Content/home'
import Climb from './Content/climb'
import Code from './Content/code'

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("intro").style.opacity = 0;
    document.getElementById("nav-wrapper").style.opacity = 1;
    document.getElementById("intro-main").style.opacity = 0;
  } else {
    document.getElementById("intro").style.opacity = 1;
    document.getElementById("nav-wrapper").style.opacity = 0;
    document.getElementById("intro-main").style.opacity = 1;

  }
  if (document.body.scrollTop > window.innerHeight*0.8 || document.documentElement.scrollTop > window.innerHeight*0.8){
    document.getElementById("nav-wrapper").style.backgroundColor = "black";
  }
  else {
    document.getElementById("nav-wrapper").style.backgroundColor = "";

  }
}


class App extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const id = event.currentTarget.id;
    if(id === 'climb_button'){
      document.getElementById("code-content").style.display = "none"
      document.getElementById("climb-content").style.display = "flex"
    }
    if (id === 'code_button') {
      document.getElementById("climb-content").style.display = "none"
      document.getElementById("code-content").style.display = "flex"
    }
}

  render() { 
    return (
    <Router> 

      <div id='main-wrapper'>
        <Home></Home>
        <Climb></Climb>>
        <Code></Code>
      </div>
    </Router>
    )
  }
}

export default App;

