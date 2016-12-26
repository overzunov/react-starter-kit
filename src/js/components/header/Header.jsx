import { connect } from 'react-redux';
import { logout } from '../../actions';
import HeaderComponent from './HeaderComponent';

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLogout: () => dispatch(logout())
    };
}

export default connect(null, mapDispatchToProps)(HeaderComponent)

