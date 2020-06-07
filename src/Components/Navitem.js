import React, { Component } from 'react';
import { Link} from 'react-scroll'


class Navitem extends Component {

    render() {
        return (
            <li id={this.props.item}>
            <Link className="nav-link" to={this.props.linkto} spy={true} smooth={true} duration={800}>
            {this.props.item}
            </Link>
            </li>
        )
    }
}

export default Navitem