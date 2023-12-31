
import React from 'react';
import './Product.css'
import {useStateValue} from './StateProvider';




function Product({ id, title, price, rating, image }) {

  const [{basket},dispatch]=useStateValue();
  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  
  return (
    <div className='product'>
      

      <div className='product__details'>
      <p className='product__title'>{title}</p>
      <p className='product__price'>
      <small>₹</small>
      <strong>{price}</strong></p>
      <div className='product__rating'>
        {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>⭐</p>
          ))}
      </div>
      </div>
        <img className='product__image' src={image} alt='product-image' />
        <button onClick={addToBasket}>Add to Bakset</button>
    </div>
  );
}

export default Product;
