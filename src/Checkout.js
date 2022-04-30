import React from 'react';
import { useStateValue } from './StateProvider';
import CheckProduct from './CheckProduct';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket}] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
            {basket.length === 0 ? (
                <div className='information'>
                    <h1>Your Amazon Cart is empty.</h1>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p>
                </div>
            ):(
                <div>
                    {basket.map(item => (
                        <CheckProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
        {basket.length>0 && (
            <div className='checkout__right'>
                {/* <h1>Subtotal</h1> */}
                <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout