import axios from 'axios';
import * as ActionTypes from './types';
import { browserHistory } from 'react-router';

export function login(username, password) {
    return {
        type: ActionTypes.LOGIN,
        payload: axios.post('/signin', {username: username, password: password})
    }
}

export function logout() {
    return (dispatch, getState) => {
        const sid = getState().login.sid;
        dispatch({
            type: ActionTypes.LOGOUT,
            payload: axios.get(`/signout?sid=${sid}`)
        }).then(() => dispatch(redirectToLogin()))
    }
}

export function redirectToLogin() {
    return (dispatch) => {
        browserHistory.push('/login')
    }
}

export function redirectToApp() {
    return (dispatch) => {
        if(window.location.pathname !== "/app/books"){
           browserHistory.push('/app/books')
        }
    }
}

export function toggle(id, dataType) {
    return {
        type: 'TOGGLE',
        payload: {
            id,
            dataType
        }
    }
}