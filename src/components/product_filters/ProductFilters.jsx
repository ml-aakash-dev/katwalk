import React from 'react'
import dd from '../../assets/imgs/down-chevron.svg'
import './styles.css'
import Category from './Category'
import Designers from './Designers'
import Size from './Size'
import Colour from './Colour'
import Price from './Price'
import SortBy from './SortBy'
import plusIcon from '../../assets/imgs/plus.svg'

const ProductFilters = () => {
       const open_dropdown =(e)=>{
       //     let dropdowns = document.querySelectorAll('.product_filter_dropdown_header')
       //      dropdowns.forEach(dropdown=> dropdown != e.target && dropdown.classList.remove('active'))
       //      console.log()
           let dropdown =   e.target
           dropdown.classList.toggle('active')
       }
    return (
        <div className="product_filters_container">
              {/* //  <div className="product_filters_mobile">
              //         <h4>What's New</h4>
              //         <span>Filters</span>
              //         <span>Reset All Filters</span>
              //         <ul className='product_filter_main_dropdown'>
              //            <li>
              //                   <img src={plusIcon} alt="" />
              //                   Category
              //            </li>
              //            <li>
              //                   <img src={plusIcon} alt="" />
              //                   Designer
              //            </li>
              //            <li>
              //                   <img src={plusIcon} alt="" />
              //                   Size
              //            </li>
              //            <li>
              //                   <img src={plusIcon} alt="" />
              //                   Colour
              //            </li>
              //            <li>
              //                   <img src={plusIcon} alt="" />
              //                   Price
              //            </li>
              //            <li>
              //                   <img src={plusIcon} alt="" />
              //                   Sort By
              //            </li>
              //            <li>
              //               <button>Apply</button>
              //            </li>
              //         </ul>
              //  </div> */}

        <div className='product_filters'>
            <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                   <span>Category</span>
                   <img src={dd} alt="" />
                   <Category/>
            </div>
            <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                   <span>Designers</span>
                   <img src={dd} alt="" />
                   <Designers/>
            </div>
            <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                   <span>Size</span>
                   <img src={dd} alt="" />
                   <Size/>
            </div>
            <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                   <span>Colour</span>
                   <img src={dd} alt="" />
                   <Colour/>
            </div>
            <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                   <span>Price</span>
                   <img src={dd} alt="" />
                   <Price/>
            </div>
            <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                   <span>Sort by</span>
                   <img src={dd} alt="" />
              <SortBy/>
            </div>
        </div> 
         </div>
    )
}

export default ProductFilters
