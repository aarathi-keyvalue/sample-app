import Layout from '../src/components/Layout';
import { Button } from '../src/components';
import Link from 'next/link';

export default function register() {
    return (
        <Layout title="Login">
            <form className='max-auto max-w-screen-md'>
                <h1 className='mb-4 text-xl'> Shipping Address </h1>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'> Full Name </label>
                    <input className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" autoFocus type="text"></input>
                </div>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor='address'>Address</label>
                    <input className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="address" autoFocus type="text"></input>
                </div>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor='city'>City</label>
                    <input className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="city" autoFocus type="text"></input>
                </div>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor='postcode'>Postal Code</label>
                    <input className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="postcode" autoFocus type="text"></input>
                </div>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor='country'>Country</label>
                    <input className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="country" autoFocus type="text"></input>
                </div>
                <Button className='bg-yellow-400 hover:bg-yellow-600'> <Link href={'/payment'}>Next</Link> </Button>

            </form>

        </Layout>
    )
}
