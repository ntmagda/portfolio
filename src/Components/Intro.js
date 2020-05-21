import React, {Component} from 'react';
import Button from './Intro_button'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});


class Intro extends Component{

    render(){
        return (
            <div id="intro-wrapper">
                <div id="intro">
                    <div id="intro-text-wrapper">
                        <div id="intro-text">Hello My name is magda and I</div>
                    </div>
                    <nav>
                        <ul>
                            <Button item ="Code" tolink="/code">Code</Button>
                            <Button  item ="Climb" tolink="/climb">Climb</Button>
                        </ul>
                    </nav>
                </div>    
            </div>
        )
}

}
export default Intro
