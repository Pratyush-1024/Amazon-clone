import React from 'react'
import {useStateValue} from './StateProvider';
import './CheckoutProduct.css'


function CheckoutProduct({id,title,image,price,rating}) {

    const [dispatch]=useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });
    }

  return (
    <div className='checkoutProduct'>
      

      <div className='checkoutProduct__details'>
      <p className='checkoutProduct__title'>{title}</p>
      <p className='checkoutProduct__price'>
      <small>₹</small>
      <strong>{price}</strong></p>
      <div className='checkoutProduct__rating'>
        {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>⭐</p>
          ))}
          <div>
          <button className='checkoutProduct__button' onClick={removeFromBasket}>Remove From Bakset</button></div>
         
          
      </div>
      </div>
        <img className='checkoutProduct__image'src={image} alt='checkoutProduct-image' />
       
    </div>
  )
}

export default CheckoutProduct