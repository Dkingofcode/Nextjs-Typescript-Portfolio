import React from 'react';
import { motion } from "framer-motion";


type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div  className='relative flex justify-center items-center'>
    <div className='absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'  />
    <div className='rounded-full border border-[#33333333] b-[300px] w-[300px] absolute mt-52' />
    <div className='rounded-full border border-[#33333333] b-[500px] w-[300px] absolute mt-52' />
    <div />
    <div />
    </div>
  );
}




