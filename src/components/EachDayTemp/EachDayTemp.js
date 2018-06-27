import React from 'react';

const EachDayTemp = (props) => {
    return (
        <div className="eachDay">{props.temp}<span className="celzius">&deg;C</span></div>
    )
}

export default EachDayTemp;