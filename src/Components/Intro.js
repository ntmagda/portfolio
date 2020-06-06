import React, {Component} from 'react';
import Social from './Social';


class Intro extends Component{
    render(){
        return (
                <div id="intro">
                    <Social></Social>
                    <div id="intro-text-wrapper">
                        <h1>Hi, My name is Magda</h1>
                        <p>- and I -</p>
                    </div>
                </div>
        )
}

}
export default Intro
