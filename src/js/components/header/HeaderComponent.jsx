import React from 'react';
import { IndexLink, Link } from 'react-router';
import Logout from './logout/LogoutComponent'
require('./header.scss');

export default class HeaderComponent extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <IndexLink to="/app/books">
                            <div className="navbar-brand">BOOKS</div>
                        </IndexLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/app/about">
                                <div>ABOUT</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/personal">
                                <div>PERSONAL</div>
                            </Link>
                        </li>
                        <li>
                            <Logout onLogout={this.props.onLogout}/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

