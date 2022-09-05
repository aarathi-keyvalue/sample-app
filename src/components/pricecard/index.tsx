import React from 'react'
import { Button } from '..';

export default function PriceCard({product}) {
    console.log("In Card:", product.price);
  return (
    <div className='flex flex-col justify-between px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md'>
        <div className='flex justify-between'>
            <p>Price</p>
            <p>${product.price}</p>
        </div>
        <div className='flex justify-between'>
            <p>Status</p>
            <p>{product.countInStock}</p>
        </div>
        <Button className='bg-yellow-500 hover:bg-yellow-600 ring-yellow-400'> Add to cart </Button>
    </div>
  )
}
