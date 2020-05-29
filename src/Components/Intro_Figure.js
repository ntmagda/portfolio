import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


class Intro_Figure extends Component{

    render(){
        return (
            <figure className = "intro_figure" id={this.props.item}>
            <a className= "intro_figure_button" id ={this.props.button_id} onClick={this.props.onClick}>
            <FontAwesomeIcon icon={faLaptopCode} size="10x" className="icon"/>
                <figcaption>
                    <h2>{this.props.h2}</h2>
                    <p>{this.props.p}</p>
                </figcaption>
            </a>
            </figure>
        )
}

}
export default Intro_Figure

  