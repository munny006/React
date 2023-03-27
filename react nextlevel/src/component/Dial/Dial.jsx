import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border:'2px solid red',padding:'20px',margin:'20px' }}>
            <h3>This is Dial component</h3>
           <p> Your Steps Count : {props.steps}</p>
        </div>
    );
};

export default Dial;