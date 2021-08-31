import React from 'react'
import ProductDetail from './ProductDetail'
import ProductSlider from './ProductSlider'
import './styles.css'

const ProductDetails = () => {
    return (
        <div className='product_details'>
            <ProductSlider/>
            <ProductDetail/>
        </div>
    )
}

export default ProductDetails
