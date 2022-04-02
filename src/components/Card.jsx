import React, { useEffect } from 'react'
import Sample from '../images/Sample'
import { FaJsSquare, FaPython } from 'react-icons/fa'

export default function Card({sm, title, desc}) {

  return (
    <div className={`overflow-hidden flex lg:flex-col justify-between 
    gap-y-8 gap-x-12 motion-safe:animate-fadeIn
    px-10 py-6 rounded-xl shadow-xl text-gray-800 bg-mistyRose-500 
    ${sm ? "lg:h-3/5 lg:w-2/4" : "lg:h-5/6 lg:w-2/3"}`}>
      <section className='w-1/3 lg:w-full lg:h-1/4'> 
        <Sample/> 
      </section>
      <section className='h-full'>
        <h2 className='text-2xl 2xl:text-4xl font-bold text-bluePigment-500'>{title}</h2>
        <p className='serifText text-base 2xl:text-2xl mt-4'>
          {desc}
        </p>
      </section>
      <section className='text-bluePigment-500 flex flex-col gap-y-4 justify-between'>
        <div>
          <h3>Languages used:</h3> 
          <div className='flex gap-x-2'><FaJsSquare/> <FaPython/></div>
        </div>
        <button className='w-full px-2 py-2 lg:px-6 lg:py-3 text-sm lg:text-xl font-semibold rounded-2xl shadow-2xl bg-bluePigment-500 text-gray-100'>See more</button>
      </section>
    </div>
  )
}
