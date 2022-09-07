import Layout from '../src/components/Layout';
import { Button } from '../src/components';
import Link from 'next/link';

export default function register() {
    return (
        <Layout title="Login">
            <form className='max-auto max-w-screen-md'>
                <h1 className='mb-4 text-xl'> Payment Method </h1>
                <input type="radio" id="paypal" name="payment" value="paypal"/>
                <label for="html">PayPal</label> <br/>
                <input type="radio" id="stripe" name="payment" value="stripe"/>
                <label for="css">Stripe</label> <br/>
                <input type="radio" id="cod" name="payment" value="cod"/>
                <label for="javascript">Cash On Delivery</label> <br/>
                
                <Button className='bg-yellow-400 hover:bg-yellow-600'> Next </Button>

            </form>

        </Layout>
    )
}
