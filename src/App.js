
import React, {Component} from 'react';
import './css/intro.css';
import './css/intro_figure.css';
import './css/climb-content.css';
import './css/code-content.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './Components/Intro';
import Code_Timeline from './Content/code'
// import Intro_Figure from './Components/Intro_Figure';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMountain } from '@fortawesome/free-solid-svg-icons'



class App extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const id = event.currentTarget.id;
    if(id === 'climb_button'){
      document.getElementById("code-content").style.display = "none"
      document.getElementById("climb-content").style.display = "block"
    }
    if (id === 'code_button') {
      const code_content = document.getElementById("code-content")
      document.getElementById("climb-content").style.display = "none"
      code_content.style.display = "block"
      // scroll.scrollTo("code_content")
    }
    
}

  render() { 
    return (
    <Router>
      <Intro></Intro>
      <section id='main-wrapper'>
         <figure className = "intro_figure" id='climb_intro'>
          <Link to="climb-content" spy={true} smooth={true} duration={800}>
              <a className= "intro_figure_button" id ='climb_button' onClick={this.handleClick}>
              <FontAwesomeIcon icon={faMountain} size="8x" className="icon"/>
                  <figcaption>
                      <h2>CLIMB</h2>
                      <p>Climb and travel the world</p>
                  </figcaption>
              </a>
          </Link>
        </figure>
        <figure className = "intro_figure" id='code_intro'>
          <Link to="code-content" spy={true} smooth={true} duration={800}>
              <a className= "intro_figure_button" id ='code_button' onClick={this.handleClick}>
              <FontAwesomeIcon icon={faLaptopCode} size="8x" className="icon"/>
                  <figcaption>
                      <h2>Code</h2>
                      <p>Code and earn money for it</p>
                  </figcaption>
              </a>
          </Link>
        </figure>
      
      
      
      </section>
      <div className = "main-content" id="climb-content">
      </div>
      <div className = "main-content" id="code-content">
      <Code_Timeline></Code_Timeline>
      </div>
    </Router>
    )
  }
}

export default App;

