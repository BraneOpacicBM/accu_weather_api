import React from 'react';
import InputField from '../InputField/InputField';
import InputBtn from '../InputBtn/InputBtn';
import './InputHolder.scss';



const InputHolder = (props) => {
    return (
        <div className="InputHolder">
            <div className="btnWrapper">
                <InputBtn />
                <InputBtn />
                <InputBtn />
                <InputBtn />
            </div>
            <InputField />
        </div>
    )
}

export default InputHolder;