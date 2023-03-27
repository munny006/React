import React, { useState } from 'react';

const Watch = () => {
    const [steps,Steps] = useState(0);
    
    return (
        <div>
            <h2>This is my Smart Watch .. </h2>
            <p>Steps : {steps} </p>
            <button>De Dour .....</button>
        </div>
    );
};

export default Watch;