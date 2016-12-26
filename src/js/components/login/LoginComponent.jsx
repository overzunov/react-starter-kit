import React from 'react';
require('./login.scss');

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    componentDidUpdate() {
        if(this.props.sid) {
            this.props.redirectToApp();
        }
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div className="login-page wrapper">
                <div className="bg-screen"/>
                <div className="login-container">
                    <div className="login-logo"/>
                    <form>
                        <div className="form-group inputs-group">
                            <input id="username" type="text" placeholder="Username"
                                   value={this.state.username}
                                   onChange={this.onUsernameChange}/>
                            <input id="password" type="password" placeholder="Password"
                                   value={this.state.password}
                                   onChange={this.onPasswordChange}/>
                        </div>
                        <div className="login-control">
                            <div className="button" onClick={(e) => this.props.onSignin(this.state.username, this.state.password)}>Sign In</div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
