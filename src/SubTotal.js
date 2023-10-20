import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import './SubTotal.css'

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className='subtotal__text'>
                            Subtotal ({basket?.length} items: <strong>{value}</strong>)
                        </p>
                        <small className='subtotal__gift'>
                            <label>
                                <input className='subtotal__giftCheckbox' type='checkbox' />
                                This order contains a gift
                            </label>
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />

            <button className='subtotal__buy'>Proceed to Buy</button>
        </div>
    )
}

export default SubTotal
