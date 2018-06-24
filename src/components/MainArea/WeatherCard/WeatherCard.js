import React from 'react';
import './WeatherCard.scss';

const WeatherCard = (props) => {
    return (
        <div className="WeatherCard">
            <div className="leftInfo">
                <h4 className="cityName">Lisbon</h4>
                <p className="cityDate">July 4th</p>
            </div>
            <div className="midInfo">
                <h4 className="cityTemp">22 <span className="temperatureDegree">&deg;</span><span className="temperatureMark">c</span></h4>
                <p className="cityWeatherInfo">Sunny</p>
            </div>
            <div className="rightInfo">
                <p className="cityHumidity"><span className="cityHumidityInfo">Humidity: </span><span className="cityHumidityValue">100%</span></p>
                <p className="cityWind"><span className="cityWindInfo">Wind: </span><span className="cityWindValue">12km/h</span></p>
            </div>
        </div>
    )
}

export default WeatherCard;