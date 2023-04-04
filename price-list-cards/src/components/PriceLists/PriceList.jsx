import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices,setPrices] = useState([]);
    useEffect(()  => {
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPrices(data));
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center my-6 bg-blue-200 font-bold p-4'>Awesome Affordable Prices</h2>
          <div className='grid grid-cols-3 gap-3'>
          {
                prices.map(price => <PriceCart
                key ={price.id}
                price ={price}
                
                ></PriceCart>)
            }
          </div>
        </div>
    );
};

export default PriceList;