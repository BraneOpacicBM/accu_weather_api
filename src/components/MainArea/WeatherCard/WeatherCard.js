import React from 'react';
import './WeatherCard.scss';

const WeatherCard = (props) => {
    return (
        <div className="WeatherCard" onClick={props.detailedView}>
            <div className="leftInfo">
                <h4 className="cityName">{props.name}</h4>
                <p className="cityDate">{props.date}</p>
            </div>
            <div className="midInfo">
                <h4 className="cityTemp">{props.temp} <span className="temperatureDegree">&deg;</span><span className="temperatureMark">c</span></h4>
                <p className="cityWeatherInfo">{props.description}</p>
            </div>
            <div className="rightInfo">
                <p className="cityHumidity"><span className="cityHumidityInfo">Humidity: </span><span className="cityHumidityValue">{props.humidity}%</span></p>
                <p className="cityWind"><span className="cityWindInfo">Wind: </span><span className="cityWindValue">{props.wind}km/h</span></p>
            </div>
        </div>
    )
}

export default WeatherCard;