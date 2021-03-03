import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer,faSearch} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header_logo_container">
                    <FontAwesomeIcon icon={faBeer} size="2x" color="gray" pull="left" transform={{ rotate: 200 }}/>
                    <FontAwesomeIcon icon={faBeer} size="2x" color="gray" transform={{ rotate: -20 }}/>
                    <span className="header_app_name">mgema.digital</span>

                </div>
                <div className="header_search">
                    <input className="header_search_input" type="text" placeholder="Which drink should be delivered?" />
                    <FontAwesomeIcon icon={faSearch} size="2x" color="black" className="header_search_button" />
                </div>
            </div>
        );
        }
    }

    export default Header;