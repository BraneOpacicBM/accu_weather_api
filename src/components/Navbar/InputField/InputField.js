import React from 'react';
import './InputField.scss';

const InputField = (props) => {
    return (
        <div className="InputField">
            <form action="">
                <input type="text" className="inputArea" placeholder="Search city"/>
            </form>
        </div>
    )
}

export default InputField;