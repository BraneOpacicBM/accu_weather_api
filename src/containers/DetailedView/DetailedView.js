import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import EachDayTemp from '../../components/EachDayTemp/EachDayTemp';
import './DetailedView.scss';
import DisplayInfo from '../../components/DisplayInfo/DisplayInfo';
import GoogleMap from '../GoogleMap/GoogleMap';

class DetailedView extends Component {

    state = {
        cityInfo: null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        cityInfo: nextProps
        })
    }

    fnum = (x) => {
        if(isNaN(x)) return x;
        if(x < 9999) {
            return x;
        }
        if(x < 1000000) {
            return Math.round(x/1000) + "K";
        }
        if( x < 10000000) {
            return (x/1000000).toFixed(2) + "M";
        }
        if(x < 1000000000) {
            return Math.round((x/1000000)) + "M";
        }
        if(x < 1000000000000) {
            return Math.round((x/1000000000)) + "B";
        }
        return "1T+";
    }

    ktc = kelvin => {
        let celsius = kelvin - 273.15;
        return Math.floor(celsius);
      }

    reducer = (total, num) => total + num

    render() {
        
        if(this.state.cityInfo !== null) {
            const cityInfo = this.state.cityInfo;
            const population = this.fnum(cityInfo.cityData.city.population);
            const dayData = [];
            for (let i = 0; i <= 39; i+=8) {
            dayData.push(cityInfo.cityData.list.slice(i, i + 8));
            }
            const averageTempCombined = [];
            dayData.map(dayDataElement => {
                return dayDataElement.map(dayByHours => {
                    return averageTempCombined.push(this.ktc(dayByHours.main.temp))
                })
            })
            const averageTempSliced = []
            for (let i = 0; i <= 39; i+=8) {
                averageTempSliced.push(averageTempCombined.slice(i, i + 8));
                }
            let fiveDayForecast = averageTempSliced.map((temp, i) => {
                const temperature = Math.floor(temp.reduce(this.reducer) / 8) 
                return <EachDayTemp temp={temperature} key={i}/>
            })

            return(
                <div className="DetailedView">
                    <div className="SectionHolder">
                        <div className="CenteredCard">
                            <DisplayInfo info={cityInfo.cityData.city.name} name entityInfo="city"/>
                            <DisplayInfo info={cityInfo.cityData.city.country} country entityInfo="country" />
                            <DisplayInfo info={population} entityInfo="population" />
                            <div className="FiveDaysForecast">
                                <h3 className="FiveDaysHeading">Next five days average forecast:</h3>
                                <div className="eachDayHolder">
                                    {fiveDayForecast}
                                </div>
                            </div>
                        </div>

                        <div className="GoogleMapsHolder">
                            <GoogleMap 
                            cityName={cityInfo.cityData.city.name}
                            lat={cityInfo.cityData.city.coord.lat} 
                            lng={cityInfo.cityData.city.coord.lon}
                            />
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = state => {
    return {
        cityData: state.detailedCityData,
        cityNotFound: state.cityNotFound
    }
}

export default connect(mapStateToProps)(DetailedView);