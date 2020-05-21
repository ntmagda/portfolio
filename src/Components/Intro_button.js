import React, {Component} from 'react';
import { Link } from "react-router-dom";


class Button extends Component {

    render(){
        return (
            <li className="intro_button" id={this.props.item}>
            <Link to={this.props.tolink}>{this.props.item}</Link>
            </li>
        )
    }
}


export default Button