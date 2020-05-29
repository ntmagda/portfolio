import React, {Component} from 'react';
import Social from './Social';


class Intro extends Component{
    render(){
        return (
            <div id="intro-wrapper">
                <div id="intro">
                    <Social></Social>
                    <div id="intro-text-wrapper">
                        <h1>Hello My name is magda</h1>
                        <p>- and I -</p>
                    </div>
                </div>
            </div>
        )
}

}
export default Intro
