import React from 'react'
import housefly from './assets'
import gsap from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';

const App = () => {

  const [randomX, setrandomX] = useState(0);
  const [randomY, setrandomY] = useState(0);
  const [rotate, setrotate] = useState(0);

  const randomx = gsap.utils.random(0,1000,50);
  const randomy = gsap.utils.random(0,1000,50);
  const rotateget = gsap.utils.random(-720, 720, 30);


  useGSAP(()=>{
    gsap.to(".fly", {
      x:randomX,
      y:randomY,
      rotate:rotate,

      duration:0.4,
      delay:0,
    })
  },{scope:'main', dependencies:[randomX, randomY, rotate]})






  return (
    <main>
      <button className='btn' onClick={()=>{
          setrandomX(randomx);
          setrandomY(randomy);
          setrotate(rotateget);
          console.log(randomx, randomy, rotate);
          }}>
          <img className='fly' src={housefly} alt="" /></button>
    </main>
  )
}

export default App