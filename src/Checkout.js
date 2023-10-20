import React from 'react';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import './Checkout.css'

function Checkout() {
    const [{basket}]=useStateValue();

  return (
    
    <div className='checkout'>

    <div className='checkout__productDiv'>
     <h1 className='checkout__heading'>Shopping Cart</h1>
      {basket?.length===0?
      (<div>
        <h2>The basket is currently empty</h2>

        <p>Please add some items in the basket to see them here</p>
      </div>)
      :(
       
        basket.map(item=>(
          <div className='checkout__productDiv'>
          <CheckoutProduct
          className='checkout__product'
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}/>
          </div>
          
        ))
      )}

      </div>

      {basket.length>0&&(
        <div className='checkout__subtotal'>
          <SubTotal className='checout__subtotal'/>
        </div>
      )}
    </div>
  );
}

export default Checkout;