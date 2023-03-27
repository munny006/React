import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{ border:'2px solid red',padding:'20px',margin:'20px' }}>
            <h3>This is Dial component</h3>
           <p> Your Steps Count : {props.steps}</p>
           <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;