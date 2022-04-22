
import React, { Fragment} from 'react'
import {  useDispatch, useSelector } from 'react-redux'

import CheckoutStep from './checkoutStep';



import { useStripe,useElements,CardNumberElement,CardExpiryElement,CardCvcElement } from '@stripe/react-stripe-js';



const options={
    style:{
        base:{
            fontSize:'16px'
        },
        invalid:{
            color:'#9e2146'
        }
    }
}



const Payment = () => {
    const stripe=useStripe();
    const element=useElements();
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.auth);
    const {cartItems,shippingInfo}=useSelector(state=>state.cart)
  return (
    <Fragment>

        <CheckoutStep shipping confirmOrder payment></CheckoutStep>
        <div className="row wrapper">
        <div className="col-10 col-lg-5">
            <form className="shadow-lg">
                <h1 className="mb-4">Card Info</h1>
                <div className="form-group">
                  <label htmlFor="card_num_field">Card Number</label>
                  <CardNumberElement
                    type="text"
                    id="card_num_field"
                    className="form-control"
                    options={options}
                  />
                </div>
				
				<div className="form-group">
                  <label htmlFor="card_exp_field">Card Expiry</label>
                  <CardExpiryElement
                    type="text"
                    id="card_exp_field"
                    className="form-control"
                    options={options}
                  />
                </div>
				
				<div className="form-group">
                  <label htmlFor="card_cvc_field">Card CVC</label>
                  <CardCvcElement
                    type="text"
                    id="card_cvc_field"
                    className="form-control"
                    options={options}
                  />
                </div>
      
            
                <button
                  id="pay_btn"
                  type="submit"
                  className="btn btn-block py-3"
                >
                  Pay
                </button>
    
              </form>
			  </div>
              </div>
    </Fragment>
  )
}

export default Payment