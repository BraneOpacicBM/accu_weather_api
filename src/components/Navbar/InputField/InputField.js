import React from 'react';
import './InputField.scss';

const InputField = (props) => {
    return (
        <div className="InputField">
            <form action="" onSubmit={(e) => props.submitForm(e)}>
                <input 
                value={props.inputValue}
                onChange={(e) => props.changeInput(e)} 
                type="text" 
                className="inputArea" 
                placeholder="Search city"/>
            </form>
        </div>
    )
}

export default InputField;