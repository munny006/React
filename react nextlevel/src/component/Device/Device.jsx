import React from 'react';
import DevceDetails from '../DeviceDetails/DevceDetails';

const Device = (props) => {
    console.log(props);
   
    return (
        <div>
            <h3>I Have a Device : {props.name}</h3>
            <DevceDetails price={props.price}></DevceDetails>
        </div>
    );
};

export default Device;