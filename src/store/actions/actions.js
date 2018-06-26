export const cityWeather = (data) => {
    return {
        type: 'CITY_WEATHER',
        data: data
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
                    .catch(err => alert(err))
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
                    }   
                }
            })
            .catch((e) => {
                // handle errors here
            });
 
    }
}