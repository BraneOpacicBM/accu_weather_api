import React from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
import './MainArea.scss';

const MainArea = (props) => {
    return (
        <div className="MainArea">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    )
}

export default MainArea;