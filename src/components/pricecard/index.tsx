import React from 'react'
import { Button } from '..';

export default function PriceCard({product}) {
    console.log("In Card:", product);
  return (
    <div className='flex flex-col justify-between px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md'>
        <div className='flex justify-between'>
            <p>Price</p>
            <p>${product.price}</p>
        </div>
        <div className='flex justify-between'>
            <p>Status</p>
            <p>Unavailable</p>
        </div>
        <Button> Add to cart </Button>
    </div>
  )
}
