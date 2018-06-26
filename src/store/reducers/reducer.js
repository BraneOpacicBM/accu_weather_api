const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CITY_WEATHER':
            return {
                ...state,
                data: [...state.data, action.data]
            }
        default:
            return state;
    }

    
}

export default reducer;