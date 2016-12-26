export default function (state=[], action) {
    switch(action.type) {
        case 'GET_ALBUMS_SUCCESS':
            return action.payload.data;
        case 'TOGGLE':
            if(action.payload.dataType === 'ALBUMS')
            return state.map((item, i) => {
                if (item.id === action.payload.id) {
                    return {...item, marked: !item.marked};
                }
                return item;
            });
        default:
            return state;
    }
}