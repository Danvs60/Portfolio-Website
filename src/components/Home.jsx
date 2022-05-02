import React from 'react'
import { FaGithub, FaLevelDownAlt } from 'react-icons/fa'
import Dot from '../images/Dot'
import Line from '../images/Line'
import Circle from '../images/Circle'
import Ellipse1_2 from '../images/Ellipse1_2'
import Ellipse1_4 from '../images/Ellipse1_4'
import Ellipse3_4 from '../images/Ellipse3_4'

const code1 = "(softwareEngineer, data) => { "
const code2 = 'return “Machine Learning!”'
const code3 = '}'

export default function Home({ scrollToProjects, scrollToAbout }) {
  return (
    <div className='bg-mistyRose-500 text-gray-800 h-screen px-24 2xl:px-40 py-16'>
      <nav className="flex justify-between w-full">
        <a className='flex items-center gap-x-2 text-2xl' href="https://github.com/Danvs60"><FaGithub className='text-gray-800' /> Danvs60</a>
        <section className='flex gap-x-10 items-center text-2xl'>
          <button className='font-semibold' onClick={() => scrollToProjects()}>Projects</button>
          <button className='font-semibold' onClick={() => scrollToAbout()}>About</button>
          <button className='text-2xl font-semibold px-4 py-1 transition-colors duration-300 rounded-full shadow-md 
          text-gray-100 bg-bluePigment-500 hover:bg-bluePigment-600 shadow-bluePigment-400'>
            My CV
          </button>
        </section>
      </nav>
      <main className='py-12 flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-6 font-extrabold text-xl 2xl:text-6xl'>
          <h1 className='text-4xl'>Hello! I am </h1>
          <h1 className='text-bluePigment-500 text-7xl'>Daniel Bartolini</h1>
        </div>
        <section className='flex items-center justify-between imageEntrance'>
          <Dot />
          <Line />
          <Ellipse1_4 />
          <Line />
          <Ellipse1_2 />
          <Line />
          <Ellipse3_4 />
          <Line />
          <Circle />
        </section>
        <div className='serifText text-3xl'>
          <h2>BSc Computer Science (AI)</h2>
          <h2>University of Kent, UK</h2>
        </div>
        <code className='serifText text-3xl'>
          <p>{code1}</p>
          <p className='ml-16'>{code2}</p>
          <p>{code3}</p>
        </code>
        <button onClick={() => scrollToProjects()} className='mt-8 animate-bounce w-64 text-2xl flex justify-center items-center gap-x-4 px-10 py-4 text-gray-100 font-bold rounded-3xl shadow-md bg-bluePigment-500'>
          Projects <FaLevelDownAlt />
        </button>
      </main>
    </div>
  )
}
