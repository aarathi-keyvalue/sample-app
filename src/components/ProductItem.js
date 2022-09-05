import Link from 'next/link'
import React from 'react'
import { Button } from './button';

export default function ProductItem({product}) {
  return (
    <div className="mb-5 block rounded-lg border border-gray-200 shadow-md">
        <Link href={`/product/${product.slug}`}>
            <a>
                <img
                src={product.image}
                alt={product.name}
                className="rounded shadow"
                />
            </a>
        </Link>
        <div className='flex flex-col items-center justify-center p-5'>
            <Link href={`/product/${product.slug}`}> 
            <a>
            <h2 className='text-lg'>{product.name}</h2>
            </a>
            </Link>
            <p className='mb-2'>{product.brand}</p>
            <p>${product.price}</p>
            <Button className=' bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600' type='button'>
                Add to cart
            </Button>
           
        </div>
    </div>
  );
}
