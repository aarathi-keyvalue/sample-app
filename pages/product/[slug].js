import { useRouter } from 'next/router'
import React from 'react'
import Layout from "../../src/components/Layout"
import data from "../../utils/data"
import PriceCard from "../../src/components/pricecard"
import ReviewCard from "../../src/components/review"
import DetailCard from '../../src/components/DetailCard'
import Link from 'next/link'

export default function ProductList() {
    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find(item => item.slug===slug)
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
            <Link href='/'> back to products </Link>
            <div className='grid md:grid-cols-4 py-4' >
                <div className='md:col-span-2'> 
                <img src={product.image} alt={product.name} />
                    </div>
                <div className='col-span-1'>
                    <DetailCard product={product}/>
                </div>
                <div className='col-span-1 px-4'>
                    <PriceCard product={product} />
                </div>
            </div>
            <h1>Customer Reviews</h1>
            <h5>No review found </h5>
            <ReviewCard />
        </div>
    </Layout>
  )
}
