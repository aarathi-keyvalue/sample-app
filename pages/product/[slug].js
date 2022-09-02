import { useRouter } from 'next/router'
import React from 'react'
import Layout from "../../src/components/Layout"
import data from "../../utils/data"
import PriceCard from "../../src/components/pricecard"

export default function ProductList() {
    const {query} = useRouter();
    const {slug} = query;
    console.log("slug:", slug);
    const product = data.products.find(item => item.slug===slug)
    console.log(product)
    if(!product){
        return(
            <Layout>
                <div> Product Not Found </div>
            </Layout>
        )
    }
  return (
    <Layout title={product.name}>
        <div className='py-2 h-full'>

            <div className='grid md:grid-cols-4' >
                <div className='bg-blue-200 md:col-span-2'> 
                <img src={product.image} alt={product.name} />
                    </div>
                <div className='bg-blue-300 col-span-1'>helloo</div>
                <div className='col-span-1 py-4 px-4'>
                    <PriceCard product={product} />
                </div>
            </div>
        </div>
    </Layout>
  )
}
