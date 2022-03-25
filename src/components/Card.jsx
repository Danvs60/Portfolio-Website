import React from 'react'
import Sample from '../images/Sample'
import { FaJsSquare, FaPython } from 'react-icons/fa'

export default function Card({size}) {
  return (
    <div className={`flex flex-col justify-between gap-y-2 px-10 py-6 rounded-xl shadow text-gray-800 bg-mistyRose-500 ${size === "sm" ? "h-2/3 w-1/4 self-end" : "h-5/6 w-1/3"}`}>
      <section> 
        <Sample/> 
      </section>
      <section>
        <h2 className='text-2xl font-bold'>Project Title</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tenetur nulla soluta repellat beatae magni, quod veniam harum omnis, <br />
        tempore deleniti blanditiis, nostrum nobis repudiandaeautem officiis. Exercitationem aut esse inventore.
        </p>
      </section>
      <section >
        <h3>Languages used:</h3> 
        <div className='flex gap-x-2'><FaJsSquare/> <FaPython/></div>
      </section>
    </div>
  )
}
