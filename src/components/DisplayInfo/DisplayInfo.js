import React from 'react';

const DisplayInfo = (props) => {

    const classSet = ["DisplayInfoResult"];

    if(props.name) {
        classSet.push("CityName");
    } else if(props.country){
        classSet.push("CountryName")
    }

    return (
        <div className="DisplayInfo">
            <span className="DisplayInfoEntity">{props.entityInfo}:</span>
            <span className={classSet.join(" ")}>{props.info}</span>
        </div>
    )
}

export default DisplayInfo;