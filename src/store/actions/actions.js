export const cityWeather = (data) => {
    return {
        type: 'CITY_WEATHER',
        data: data
    }
}

export const cityWeatherDetailed = (city) => {
    return {
        type: 'CITY_WEATHER_DETAILED',
        city: city
    }
}

export const cityNotFound = () => {
    return {
        type: 'CITY_NOT_FOUND'
    }
} 

export const removeCityNotFound = () => {
    return {
        type: 'REMOVE_CITY_NOT_FOUND'
    }
} 



export const asyncCityWeather = (cities) => {

    
    return dispatch => {
        const asyncFetch = (cityName) => {
            const urlAPI = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ca360ee30cde9d947421fc290e085dbb";
            return fetch(urlAPI)
                    .then(response => {
                        return response.json()
                    })
                    
        }

            let promises = [];
    
            for(let i = 0; i < cities.length; i++){
                promises.push(asyncFetch(cities[i]));
            }
        
        
            Promise.all(promises)
            .then((cities) => {
                for(let i = 0; i < promises.length; i++){
                    if(cities[i].cod !== "404") {
                        dispatch(cityWeather(cities[i]))
                    } else {
                        dispatch(cityNotFound())
                    }  
                }
            })
            .catch((e) => {
                console.log(e)
            });
 
    }
}

export const asyncCityWeatherDetailed = (city) => {

    return dispatch => {
        const urlAPIdetailed = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ca360ee30cde9d947421fc290e085dbb";

    fetch(urlAPIdetailed)
        .then(response => response.json())
        .then(parsedRes => {
            dispatch(cityWeatherDetailed(parsedRes))
        })
        .catch(err => alert(err))
    }
}

export const deleteCityFromBase = (cityId) => {
    return {
        type: 'DELETE_CITY_FROM_BASE',
        cityId: cityId
    }
}