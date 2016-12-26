import { connect } from 'react-redux';
import { login, redirectToApp } from '../../actions';
import LoginComponent from './LoginComponent';

function mapStateToProps(state, ownProps) {
    return {
        username: state.login.user.username || '',
        password: state.login.user.password || '',
        sid: state.login.sid || null
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSignin: (username, password) => dispatch(login(username, password)),
        redirectToApp: () => dispatch(redirectToApp())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

