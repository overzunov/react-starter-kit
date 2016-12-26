import { combineReducers } from 'redux';
import usersReducer from './users';
import albumsReducer from './albums';
import loginReducer from './login';

export default combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    login: loginReducer
})


