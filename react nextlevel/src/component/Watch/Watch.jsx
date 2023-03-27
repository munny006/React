import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

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
        <div style={{ border:'2px solid blue',margin:'10px',padding:'10px'}}>
            <h2>This is my Smart Watch .. </h2>
            <p>Steps : {steps} </p>
            <button onClick={increaseSteps}>De Dour .....</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;