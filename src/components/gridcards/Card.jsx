import React, { useRef, useState } from 'react'
import './styles.css'
import outlined_heart from '../../assets/imgs/red_outlined_like.svg'
import filled_heart from '../../assets/imgs/filled_like.svg'
import img1 from '../../assets/images/products/abaya1_1.jpg'
import img1Hover from '../../assets/images/products/abaya1.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
    const [heart,setHeart] = useState(outlined_heart)
    const heartElm = useRef()
    const changeHeartToFilled = ()=>{
           heartElm.current.src = filled_heart
     }
    const  changeHeartToOulined =()=>{
        heartElm.current.src = outlined_heart
    }
    return (
        <div className='GRIDCARD'>
                    <Link to='/product_details'>
                    </Link>
                    <div className="GRIDCARDIMG">
                            <div className="BADGE">New In</div>
                            {/* <svg className='heart' version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 20.2 18.8" >
                                <g id="like-6">
                                <path id="Path_6-6" d="M19,7.1c-0.2-2.7-2.1-4.6-4.5-4.6c-1.6,0-3,0.8-3.8,2.2C9.9,3.3,8.5,2.5,6.9,2.5c-2.4,0-4.2,1.9-4.5,4.6   c-0.1,0.6,0,1.2,0.1,1.8c0.4,1.5,1.2,2.8,2.3,3.8l5.8,5.2l5.9-5.2c1.1-1,1.9-2.3,2.3-3.8C19,8.3,19.1,7.7,19,7.1z M18.2,8.7   c-0.3,1.4-1.1,2.6-2.1,3.5L10.7,17l-5.4-4.9c-1-0.9-1.8-2.2-2.1-3.5c-0.1-0.5-0.2-1-0.1-1.5l0,0c0-2.1,1.7-3.9,3.8-4   c1.5,0,2.9,1,3.4,2.4l0.3,0.7L11,5.6c0.6-1.4,2-2.4,3.5-2.4c2,0,3.7,1.7,3.9,4.1C18.4,7.7,18.4,8.2,18.2,8.7L18.2,8.7z" />
                                </g>
                            </svg>  */}
                            <img ref={heartElm} onMouseLeave={changeHeartToOulined} onMouseEnter={changeHeartToFilled} src={heart} alt="" className="heart" />
                            <img className='CARDIMG' src={img1} alt="" />
                            <img className='CARDIMG CARDIMGHOVER' src={img1Hover} alt="" />
                    </div>
                    <div className="GRIDCARDCONTENT">
                        <p>Beige Ribbed Sleeve Long Sleeve Top</p>
                        <h4>Aliya Designer</h4>
                        <span>SAR 5</span>   
                    </div>
       
                </div>
    )
}

export default Card
