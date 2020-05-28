
import React, {Component} from 'react';
import './css/intro.css';
import './css/intro_figure.css';
import './css/bottom.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './Components/Intro';
import Intro_Figure from './Components/Intro_Figure';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




function ChooseBottom(item) {
    // if (item === 'climb_intro') {
      document.getElementById("bottom-code").style.display = "block"
      document.getElementById("bottom-climb").style.display = "none"
    // }
    // if (item === 'code_intro') {
    //   document.getElementById("bottom-climb").style.display = "block"
    //   document.getElementById("bottom-code").style.display = "none"

    // }
    scroll.scrollToBottom()
}


class App extends Component {
  render() { 
    return (
    <Router>
      <Intro></Intro>
      <section id='main-wrapper'>
        <Intro_Figure item = 'climb_intro' h2='CLIMB' p ='Climb and travel the world' onClick={(item) => ChooseBottom(item)}></Intro_Figure>
        <Intro_Figure item = 'code_intro' h2='CODE' p ='Code and earn money for it' onClick={(item) => ChooseBottom(item)}></Intro_Figure>
      </section>
      <div className = "bottom" id="bottom-code"></div>
      <div className = "bottom" id="bottom-climb"></div>
    </Router>
    )
  }



  // componentDidMount(){
 
  //   Events.scrollEvent.register('begin', function(to, element) {
  //     console.log("begin", arguments);
  //   });
 
  //   Events.scrollEvent.register('end', function(to, element) {
  //     console.log("end", arguments);
  //   });
 
  //   scrollSpy.update();
  // }
}

export default App;

