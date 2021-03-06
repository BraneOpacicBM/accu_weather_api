import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from './WeatherCard/WeatherCard';
import { asyncCityWeatherDetailed, removeCityNotFound } from '../../store/actions/actions';
import './MainArea.scss';

class MainArea extends Component {


    getDetailedViewHandler = (cityName) => {
        this.props.cityWeatherDetailed(cityName);
    }

    ktc = kelvin => {
    let celsius = kelvin - 273.15;
    return Math.floor(celsius);
    }

    cityNotFoundHandler = () => {
        this.props.removeCityNotFound()
    }
      

    dateRender = (date) => {
        const a = new Date(date * 1000);
        const months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
        
        const month = months[a.getMonth()];
        let day = a.getDate();
        if( day === 1) {
            day += "st";
        } else if (day === 2) {
            day += "nd";
        } else if (day === 3) {
            day += "rd";
        } else {
            day += "th";
        }
        
        
        return month + " " + day;
 }

    render() {

        let cityNotFound = null;

        if(this.props.cityNotFound) {
            cityNotFound = <div className="CityNotFound" onClick={this.cityNotFoundHandler}>City not found!<span><FontAwesomeIcon icon={faTimes}/></span></div>
        }
        let weatherCard = null;
        if(this.props.data.length > 0) {
            weatherCard = this.props.data.map((cityInfo, i) => {
                return <NavLink exact to={"/detailedView/" + cityInfo.name} key={i} style={{ textDecoration: 'none' }}>
                        <WeatherCard 
                        name={cityInfo.name} 
                        description={cityInfo.weather[0].description}
                        wind={cityInfo.wind.speed}
                        humidity={cityInfo.main.humidity}
                        temp={this.ktc(cityInfo.main.temp)}
                        date={this.dateRender(new Date(cityInfo.dt))} 
                        id={cityInfo.id}
                        detailedView={() => this.getDetailedViewHandler(cityInfo.name)}
                        />
                    </NavLink>
            })
        }

        return (
            <div className="MainArea">
                {cityNotFound}
                <div className="WeatherCardWrapper">{weatherCard}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        cityNotFound: state.cityNotFound
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cityWeatherDetailed: (cityName) => dispatch(asyncCityWeatherDetailed(cityName)),
        removeCityNotFound: () => dispatch(removeCityNotFound())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArea);