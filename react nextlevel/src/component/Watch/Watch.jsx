import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const increaseSteps = () =>{
       const nextSteaps = steps + 1;
       setSteps(nextSteaps);
      
    }
    useEffect(()=>{
        console.log(steps)
    },[steps])
    return (
        <div>
            <h2>This is my Smart Watch .. </h2>
            <p>Steps : {steps} </p>
            <button onClick={increaseSteps}>De Dour .....</button>
        </div>
    );
};

export default Watch;