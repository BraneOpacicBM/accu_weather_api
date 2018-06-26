import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../InputField/InputField';
import InputBtn from '../InputBtn/InputBtn';
import { asyncCityWeather } from '../../../store/actions/actions';
import './InputHolder.scss';




class InputHolder extends Component {

    state = {
        inputValue: ""
    }

    inputHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        }) 
    }

    formHandler = (e) => {
        e.preventDefault();
        if(this.state.inputValue.trim() !== "" && this.state.inputValue.length > 1){
            this.props.getCityWeather(this.state.inputValue)
            this.setState({
                inputValue: ""
            })
        }
    }


    render() {

        const { data } = this.props;

        let cityBtns = null;

        if(data.length > 0) {
            cityBtns =  data.map(city => {
                return <InputBtn 
                cityName={city.name} 
                id={city.id} 
                key={city.id}/>
            })
        }

        return (
            <div className="InputHolder">
                <div className="btnWrapper">
                    {cityBtns}
                </div>
                <InputField 
                submitForm={this.formHandler}
                inputValue={this.state.inputValue}
                changeInput={this.inputHandler}
                />
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