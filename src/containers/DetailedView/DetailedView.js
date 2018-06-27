import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DetailedView.scss';

class DetailedView extends Component {

    state = {
        cityInfo: null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        cityInfo: nextProps
        })
    }

    ktc = kelvin => {
        let celsius = kelvin - 273.15;
        return Math.floor(celsius);
      }

    reducer = (total, num) => total + num

    render() {
        
        if(this.state.cityInfo !== null) {
            const cityInfo = this.state.cityInfo;
            return(
                <div className="DetailedView">
                    <div className="CenteredCard">
                        <div className="DisplayInfo">
                            <span className="DisplayInfoEntity">city:</span>
                            <span className="DisplayInfoResult">{cityInfo.cityData.city.name}</span>
                        </div>
                        <div className="DisplayInfo">
                            <span className="DisplayInfoEntity">country:</span>
                            <span className="DisplayInfoResult">{cityInfo.cityData.city.country}</span>
                        </div>
                        <div className="DisplayInfo">
                            <span className="DisplayInfoEntity">population:</span>
                            <span className="DisplayInfoResult">{cityInfo.cityData.city.population}</span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <h1>Spinner</h1>
        }
    }
}

const mapStateToProps = state => {
    return {
        cityData: state.detailedCityData
    }
}

export default connect(mapStateToProps)(DetailedView);