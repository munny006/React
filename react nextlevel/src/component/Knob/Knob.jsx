import React from 'react';

const Knob = (props) => {
    return (
        <div style={{ border:'2px solid purple',margin:'20px',padding:'20px' }}>
            <h5>This is Knob Component</h5>
            <p>
                Steps here is : {props.steps}
            </p>
        </div>
    );
};

export default Knob;