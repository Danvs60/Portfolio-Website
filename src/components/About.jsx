import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

export default function About({reference}) {
  return (
    <div ref={reference} className='px-32 py-16 bg-mistyRose-500 h-full flex flex-col gap-y-6 text-4xl text-gray-800'>
      <h1 className='text-8xl font-bold'>About <span className='text-bluePigment-500'>me</span></h1>
      <p className='leading-normal w-4/5'>I am a Computer Scientist that loves to learn about Machine Learning and Data. 
        I come from Italy and I have been interested in Computer Science and IT since my teen years :).
        I was part of an exchange student program and studied for a year in a US High School.

      </p>
      <h2>Contact me db666@kent.ac.uk</h2>
      <a href="http://"><FaLinkedin/></a>
    </div>
  )
}
