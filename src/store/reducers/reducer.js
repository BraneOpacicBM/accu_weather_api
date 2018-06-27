const initialState = {
    data: [],
    detailedCityData: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case 'CITY_WEATHER':
            
            if(state.data.filter(data => data.name === action.data.name).length > 0){
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    data: [...state.data, action.data]
                    
                }
            }
        case 'DELETE_CITY_FROM_BASE':

            return {
                ...state,
                data: state.data.filter( cityInfo => cityInfo.id !== action.cityId)
            }


        case 'CITY_WEATHER_DETAILED':

            return {
                ...state,
                detailedCityData: action.city
            }

        default:
            return state;
    }
    
}

export default reducer;