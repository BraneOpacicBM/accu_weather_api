const initialState = {
  data: [],
  detailedCityData: [],
  cityNotFound: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CITY_WEATHER":
      if (
        state.data.filter(data => data.name === action.data.name).length > 0
      ) {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          data: [...state.data, action.data]
        };
      }
    case "DELETE_CITY_FROM_BASE":
      return {
        ...state,
        data: state.data.filter(cityInfo => cityInfo.id !== action.cityId)
      };

    case "CITY_WEATHER_DETAILED":
      return {
        ...state,
        detailedCityData: action.city
      };

    case "CITY_NOT_FOUND":
      return {
        ...state,
        cityNotFound: true
      };

    case "REMOVE_CITY_NOT_FOUND":
      return {
        ...state,
        cityNotFound: false
      };

    default:
      return state;
  }
};

export default reducer;
