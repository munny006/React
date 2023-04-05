import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 my-4  rounded-md p-5 flex flex-col'>
            <h2 className=' text-center  text-5xl font-bold font-bold my-3'>{price.price}/mon</h2>
           <h5 className='text-2xl text-center font-bold my-6'>{price.name}</h5>
           <p className='font-bold  text-2xl underline'>Features :</p>
           {
            price.features.map((feature,idx) => <Feature
            key={idx}
            feature = {feature}
            
            ></Feature>)
           }
           <button className='w-full bg-yellow-400 mt-auto py-3  rounded-md font-bold  hover:bg-red-400 '>Buy Now</button>
            
        </div>
    );
};

export default PriceCart;