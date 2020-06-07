import React, { Component } from 'react';
import Intro from '../Components/Intro';
import Intro_figure from '../Components/Intro_Figure_beta';
import Navbar from '../Components/Navbar';
import { faLaptopCode, faMountain,  faUtensils} from '@fortawesome/free-solid-svg-icons'


class Home extends Component {
    render() {
    return (
        <div id='intro-wrapper'>
        <Intro></Intro>
        <Navbar></Navbar>
        <section id='intro-main'>
          <Intro_figure
            introHeader = 'CODE'
            introText = 'Code and earn money for it'
            icon_name = {faLaptopCode}
            icon_size = "8x"
            linkto = "code-content"
            >
  
          </Intro_figure>
          <Intro_figure
            introHeader = 'CLIMB'
            introText = 'Climb and travel the world'
            icon_name = {faMountain}
            icon_size = "8x"
            linkto = "climb-content"
            >
  
          </Intro_figure>
        </section>
        </div>
        )      
    }
}

export default Home