export default function(state={
    user: {},
    sid: null
}, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {...state,
                user: action.payload.data.user,
                sid: action.payload.data.sid
            };
        case 'LOGIN_LOADING':
            return state;
        case 'LOGOUT_SUCCESS':
            return {...state,
                user: {},
                sid: null
            };
        default:
            return state;
    }
}