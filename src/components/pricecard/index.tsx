import { Router } from '@i18n';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { Button } from '..';
import {Store} from "../../../utils/Store"

export default function PriceCard({product}) {

  const { state,dispatch} = useContext(Store);

  const router=useRouter();

    const addToCartHandler = () => {
      const existItem = state.cart.cartItems.find((x)=> x.slug === product.slug);
      const quantity = existItem ? existItem.quantity + 1 : 1;

      if(product.countInStock < quantity){
        alert('Sorry. Product is out of Stock');
        return;
      }
        dispatch({type:'CART_ADD_ITEM', payload: {...product, quantity}});
        router.push('/cart');
    };

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
        <Button onClick={addToCartHandler}> Add to cart </Button>
    </div>
  )
}
