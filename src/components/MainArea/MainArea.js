import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCard from './WeatherCard/WeatherCard';
import './MainArea.scss';

class MainArea extends Component {

     ktc = kelvin => {
        let celsius = kelvin - 273.15;
        return Math.floor(celsius);
      }
      
      dateRender = date => {
        const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
        const month = monthNames[date.getMonth()];
        let day = date.getDate();
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

        let weatherCard = null;
        if(this.props.data.length > 0) {
            weatherCard = this.props.data.map((cityInfo, i) => {
                return <WeatherCard 
                name={cityInfo.name} 
                key={i}
                description={cityInfo.weather[0].description}
                wind={cityInfo.wind.speed}
                humidity={cityInfo.main.humidity}
                temp={this.ktc(cityInfo.main.temp)}
                date={this.dateRender(new Date(cityInfo.dt))} 
                id={cityInfo.id} />
            })
        }

        return (
            <div className="MainArea">
                {weatherCard}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(MainArea);