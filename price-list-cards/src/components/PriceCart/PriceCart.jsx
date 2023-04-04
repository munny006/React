import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div>
            <h2 className='text-purple-700  text-5xl font-bold'>{price.price}/mon</h2>
           <h5 className='text-2xl font-bold pl-3'> {price.name}</h5>
            
        </div>
    );
};

export default PriceCart;