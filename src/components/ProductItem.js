import Link from 'next/link'
import React from 'react'

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
            <button className='rounded bg-yellow-300 py-2 px-4 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600' type='button'>
                Add to cart
            </button>
           
        </div>
    </div>
  );
}
