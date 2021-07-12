import React from 'react';
import { Link } from 'react-router-dom';

import navLogo from './images/Anonymous-world-map.svg'
import './styles/Navbar.css'

class Navbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                      <img src={navLogo} alt="navLogo" className="Nav__logo d-inline-block align-text-top" />
                      <div className="ms-3 d-inline-block">Find your country</div>
                    </Link>
                  </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;