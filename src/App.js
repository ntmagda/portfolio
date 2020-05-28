
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
          <figure className = "climb_code_intro" id='climb_intro'>
            <figcaption>
              <h2>CLIMB</h2>
              <p>Travel the world and climb</p>
            </figcaption>
          </figure>
          <figure className ="climb_code_intro" id='code_intro'>
            <figcaption>
              <h2>CODE</h2>
              <p>Code and earn money for it</p>
            </figcaption>
          </figure>
      </div>
    </Router>
    )
  }
}

export default App;