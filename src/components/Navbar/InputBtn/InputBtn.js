import React from 'react';
import './InputBtn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const InputBtn = (props) => {
    return (
        <div className="InputBtn">
            <div className="BtnWrapper">
                <div className="InputBtnText">{props.cityName}</div>
                <div className="InputBtnClose" onClick={props.deleteBtn}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
            </div>
        </div>
    )
}

export default InputBtn;