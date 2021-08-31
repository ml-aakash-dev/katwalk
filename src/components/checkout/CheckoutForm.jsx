import React from 'react'

const CheckoutForm = () => {
    return (
        <div className='check_out'>
            <div className="checkout_breadcrumb">
                <span>Home / Checkout</span>
            </div>
            <UserAndBilling/>
            <PaymentAndShipping/>
            <OrderSummary/>
        </div>
    )
}

export default CheckoutForm
