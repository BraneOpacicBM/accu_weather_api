import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../InputField/InputField';
import InputBtn from '../InputBtn/InputBtn';
import { asyncCityWeather } from '../../../store/actions/actions';
import './InputHolder.scss';




class InputHolder extends Component {


    render() {

        const { data } = this.props;

        return (
            <div className="InputHolder">
                <div className="btnWrapper">
                    <InputBtn cityName="Barcelona" />
                    <InputBtn cityName="Paris"/>
                    <InputBtn cityName="New York"/>
                    <InputBtn cityName="Madrid"/>
                </div>
                <InputField />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCityWeather: (city) => dispatch(asyncCityWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputHolder);