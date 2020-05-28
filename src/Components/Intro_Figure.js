import React, {Component} from 'react';


class Intro_Figure extends Component{

    render(){
        return (
                <figure className = "intro_figure" id={this.props.item}>
                <a onClick={this.props.onClick}>
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
