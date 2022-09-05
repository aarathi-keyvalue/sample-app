import Layout from '../src/components/Layout';
import { Button } from '../src/components';
import Link from 'next/link';

export default function register() {
    return (
        <Layout title="Login">
            <form className='max-auto max-w-screen-md'>
                <h1 className='mb-4 text-xl'> Payment Method </h1>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'> Full Name </label>
                    <input className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" autoFocus type="text"></input>
                </div>
                
                <Button className='bg-yellow-400 hover:bg-yellow-600'> Next </Button>

            </form>

        </Layout>
    )
}
