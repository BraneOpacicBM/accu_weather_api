export const cityWeather = (data) => {
    return {
        type: 'CITY_WEATHER',
        data: data
    }
}

export const asyncCityWeather = (city) => {
    const urlAPI = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca360ee30cde9d947421fc290e085dbb";
    return dispatch => {

        fetch(urlAPI)
            .then(response => response.json())
            .then(parsedRes => dispatch(cityWeather(parsedRes)))
            .catch(err => console.log(err))
    }
}