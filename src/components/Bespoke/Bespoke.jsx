import React, { useEffect, useRef } from 'react'
import './styles.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

const BeSpoke = () => {
    const bespoke = useRef()
    useEffect(()=>{
        ScrollTrigger.create({
            trigger:bespoke?.current,
            onEnter: ()=>{
                bespoke?.current?.classList.add('animate')
                
            }

        
        })
        
    })
    return (
        <div className='Bespoke'>
            <div className="BespokeContainer">
                <div  ref={bespoke} className='bespokeImg'>
                    <img src="https://katwalk.sa/v3/public/uploads/all/yFSY4uOU84wArYVdPexnaFrg6FyB6hkPDani0d6H.jpg" alt="" />
                   <h1>Bespoke</h1>
                </div>
                <button></button>
            </div>
        </div>
    )
}

export default BeSpoke
