import React from 'react'
import Link from 'next/link'

export default function ReviewCard() {
  return (
    <div className='border-solid border-2 rounded-lg shadow-md px-7 py-7 my-9'>
        <p>Please <Link href='/login'><a className='text-blue-600'>login</a></Link> to write a review</p>
    </div>
  )
}
