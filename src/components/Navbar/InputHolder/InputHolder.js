import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../InputField/InputField';
import InputBtn from '../InputBtn/InputBtn';
import { asyncCityWeather, deleteCityFromBase } from '../../../store/actions/actions';
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
            let cities = this.state.inputValue.split(",").map(Function.prototype.call, String.prototype.trim);
            if([].concat(cities).sort().reverse().pop() !== "") {
                this.props.getCityWeather(cities)
                this.setState({
                    inputValue: ""
                })
            }
            
        }
    }

    deleteBtnHandler = (cityId) => {
        this.props.deleteCity(cityId)
    }


    render() {

        const { data } = this.props;

        let cityBtns = null;

        if(data.length > 0) {
            cityBtns =  data.map(city => {
                return <InputBtn
                deleteBtn = {() => this.deleteBtnHandler(city.id)} 
                cityName={city.name} 
                id={city.id} 
                key={city.id}/>
            })
        }

        return (
            <div className="InputHolder">
                {cityBtns}
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
        getCityWeather: (cities) => dispatch(asyncCityWeather(cities)),
        deleteCity: (id) => dispatch(deleteCityFromBase(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputHolder);