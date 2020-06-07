import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../css/social.css';


class Social extends Component {
    render() {
        return (
        <div class="social">            
            <a href="https://github.com/ntmagda93" target="_blank"> <FontAwesomeIcon icon={faGithub} className="social-item"/><i></i></a>
            <a href="https://Instagram.com/ntmagda" target="_blank"><FontAwesomeIcon icon={faInstagram} className="social-item" /><i></i></a>
            <a href="https://www.facebook.com/magda.nowaktrzos" target="_blank"><FontAwesomeIcon icon={faFacebook} className="social-item"/><i></i></a>
            <a href="https://www.linkedin.com/in/magda-nowak-trzos-360303a6/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="social-item"/><i></i></a>
        </div>
        )
    }
}
export default Social

