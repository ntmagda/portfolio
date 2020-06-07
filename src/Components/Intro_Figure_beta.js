import React, { Component, Fragment } from 'react';
import { Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {handleClick1} from '../Utils/utils'


class Intro_figure extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
      }
    
      handleClick(event) {
        var content_array = document.getElementsByClassName("main-content")
        for (var i = 0; i < content_array.length; i++) {
                    const content_item = content_array.item(i)
                    if (content_item.id === this.props.linkto){
                        content_item.style.display = "flex"
                    }
                    else {
                        content_item.style.display = "none"
                    }

        }
    }

  render() {
    const {
      introHeader,
      introText,
      icon_name,
      icon_size,
      linkto,
    } = this.props;
    return (
        
        <figure className = "intro_figure" >
            <Link to={linkto} spy={true} smooth={true} duration={800}>
                {/* <a className= "intro_figure_button"  onClick= {(linkto) => handleClick1(linkto)}> */}
                <a className= "intro_figure_button"  onClick= {this.handleClick}>
              
                <FontAwesomeIcon icon={icon_name} size={icon_size} className="icon"/>
                    <figcaption>
                        <h2>{introHeader}</h2>
                        <p>{introText}</p>
                    </figcaption>
                </a>
            </Link>
         </figure>
    )
}}


export default Intro_figure;