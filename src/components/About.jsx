import React from 'react'
import Waves from '../images/wave-haikei.svg'
import Steps from './Steps'

export default function About({ reference }) {
  return (
    <div ref={reference} style={{ backgroundImage: `url(${Waves})` }}
      className='spacerAbout px-12 py-8 md:px-32 md:py-16 min-h-screen flex flex-col gap-y-10 text-2xl text-gray-800'>
      <h1 className='text-6xl md:text-8xl font-bold'>About <span className='text-bluePigment-500'>me</span></h1>
      <p className='text-base md:text-lg leading-normal w-full md:w-4/5'>I am a Computer Scientist that loves Machine Learning and Data.
        I come from Italy and I have been interested in Computer Science and IT since I was a teen. <br /> <br />
        I was part of an exchange student program and studied for a year in a US High School.
        I study Computer Science at the University of Kent and joined their placement programme. <br /><br />
        For my placement I was a software engineer and data analyst for Pfizer. Below you can find my career progress.
      </p>
      <Steps/>
    </div>
  )
}
