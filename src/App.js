
import React, {Component} from 'react';
import './css/intro.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './Components/Intro';


class App extends Component {
  render() { 
    return (
    <Router>
      <Intro></Intro>
      <div id='main-wrapper'>
          <div className = "climb_code_intro" id='climb_intro'></div>
          <div className ="climb_code_intro" id='code_intro'></div>
      </div>
    </Router>
    )
  }
}

export default App;