import React, { useState } from 'react'
import chevron_down from '../../assets/imgs/down-chevron.svg'
import sizeIcon from '../../assets/imgs/size.svg'

const ProductDetail = () => {
    const [color,setColor] = useState('Brown')
    const [size,setSize] = useState(50)
    const [closet,setCloset] = useState(52)
    const openDropDown =(id)=>{
      document.getElementById(id).classList.toggle('active')
    }
    return (
        <div className='product_detail'>
            <div className="product_detail_breadcrumb">
                <span>Home/ Abayas / Simple Elegant Abaya</span>
            </div>
            <div className="product_detail_header">
                <h4>Aliya Designs</h4>
                <h6>Simple Elegant Abaya</h6>
            </div>
            <span className="product_detail_price">
                151 SAR
            </span>
            <div className="product_detail_input_wrapper">
                 <span className='product_detail_input_label'>
                     Color:
                 </span>
                 <div onClick={()=> openDropDown('color')} className='product_detail_dropdown_button'>
                        {color} <img src={chevron_down} alt="" />
                        <ul id='color'   className='product_detail_dropdown'>
                            <li onClick={()=>setColor('Brown')}>Brown </li>
                            <li onClick={()=>setColor("Ivory")}>Ivory </li>
                            <li onClick={()=>setColor("Dark Blue")}>Dark Blue </li>
                            <li onClick={()=>setColor("Dark Grey")}>Dark grey </li>
                        </ul>
                 </div>
            </div>
          
            <div className="product_detail_input_wrapper">
                 <span className='product_detail_input_label'>
                     Size:
                 </span>
                 <div onClick={()=> openDropDown('size')} className='product_detail_dropdown_button'>
                        50 <img src={chevron_down} alt="" />
                        <ul id='size' className='product_detail_dropdown'>
                            <li onClick={()=>setSize(52)}>52 </li>
                            <li onClick={()=>setSize(54)}>54 </li>
                            <li onClick={()=>setSize(56)}>56 </li>
                            <li onClick={()=>setSize(58)}>58 </li>
                            <li onClick={()=>setSize(60)}>60 </li>
                            <li onClick={()=>setSize(62)}>62 </li>
                        </ul>
                 </div>
            </div>
            <div className="product_detail_input_wrapper">
                 <span className='product_detail_input_label'>
                    Closet Size:
                 </span>
                 <div onClick={()=>openDropDown('closet')} className='product_detail_dropdown_button'>
                        {closet} <img src={chevron_down} alt="" />
                        <ul id='closet' className='product_detail_dropdown'>
                            <li onClick={()=>setCloset(52)}>52 </li>
                            <li onClick={()=>setCloset(54)}>54 </li>
                            <li onClick={()=>setCloset(56)}>56 </li>
                            <li onClick={()=>setCloset(58)}>58 </li>
                            <li onClick={()=>setCloset(60)}>60 </li>
                            <li onClick={()=>setCloset(62)}>62 </li>
                        </ul>
                 </div>
            </div>
            <div className="product_detail_input_wrapper alteration_and_size">
                <div className='alteration'>
                    <span className='circle'></span>
                    Any Alteration?
                    {/* <div className="alteration_dropdown">

                    </div> */}
                </div>
            <span className='sizeIcon'>
                <img src={sizeIcon} alt="" />
                Size Guide
            </span>
            </div>
        </div>
    )
}

export default ProductDetail
