import React, {Component} from 'react';
import Social from './Social';
import '../css/navbar.css';
import Navitem from './Navitem'



class Navbar extends Component{
    render(){
        return (
                <div id="nav-wrapper">
                    <nav>
                        <Navitem item ="Home" linkto="intro-wrapper"></Navitem>
                        <Navitem item = "Climb" linkto = "climb-content" ></Navitem>
                        <Navitem item ="Code" linkto = "code-content" > </Navitem>
                    </nav>
                    <Social></Social>
                </div>
        )
}

}
export default Navbar
