import React from 'react';
import './CheckProduct.css';
import { useStateValue } from './StateProvider';

function CheckProduct({id, title, image, price, rating}) {
  const [, dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
    <div className='checkProduct'>
        <img className='checkProduct__image' src={image} alt=''/>
        <div className='checkProduct__info'>
            <p className='checkProduct__title'>{title}</p>
            <p className='checkProduct__price'>
                <small>₹ </small>
                <strong>{price}</strong>
            </p>
            <div className='checkProduct__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p><span role="img" aria-labelledby='jsx-ally/accessible-emoji'>⭐</span></p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from Cart</button>
        </div>
    </div>
  );
}

export default CheckProduct