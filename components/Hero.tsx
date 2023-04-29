import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"; 
import BackgroundCircles from './BackgroundCircles';


type Props = {};

export default function Hero({}: Props) {
  const [text, count]  = useTypewriter({
    words:[
       "hi, My name is David",
       "A-man-with-a-vision.tsx",
       "<ButLovesTohelpOthers />" 
    ],
    loop: true,
    delaySpeed: 2000,
  })
    return (
    <div>
     <BackgroundCircles />
     <h1>
       <span>{text}</span>
       <Cursor cursorColor='#f7A80A' /> 
     </h1>
    </div>
  );
}