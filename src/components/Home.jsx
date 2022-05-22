import React from 'react'
import { FaGithub, FaLevelDownAlt } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import Dot from '../images/Dot'
import Line from '../images/Line'
import Circle from '../images/Circle'
import Ellipse1_2 from '../images/Ellipse1_2'
import Ellipse1_4 from '../images/Ellipse1_4'
import Ellipse3_4 from '../images/Ellipse3_4'
import circles from '../images/circle-scatter-haikei.svg'

const code1 = "(softwareEngineer, data) => { "
const code2 = 'return “Machine Learning!”'
const code3 = '}'


export default function Home({ scrollToProjects, scrollToAbout }) {

  const [menuOpen, setMenuOpen] = React.useState(window.innerWidth >= 768)

  return (
    <div className='bg-mistyRose-500 text-gray-800 min-h-screen px-12 md:px-24 2xl:px-40 py-8 md:py-16 spacer' style={{ backgroundImage: `url(${circles})` }}>
      <button onClick={() => setMenuOpen(!menuOpen)} className='block md:hidden'><HiMenu size={30} /></button>
      <nav className={`${menuOpen ? "block" : "hidden"} flex flex-col md:flex-row md:justify-between w-full py-2 px-2`}>
        <a className='flex items-center gap-x-2 mb-2 text-2xl' href="https://github.com/Danvs60"><FaGithub className='text-gray-800' /> Danvs60</a>
        <section className='flex flex-col md:flex-row gap-x-10 gap-y-3 items-start md:items-center text-xl md:text-2xl'>
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
          <h1 className='text-xl md:text-3xl lg:text-4xl'>Hello! I am </h1>
          <h1 className='text-bluePigment-500 text-4xl md:text-6xl lg:text-7xl'>Daniel Bartolini</h1>
        </div>
        <section className='items-center justify-between hidden md:flex'>
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
        <div className='serifText text-lg md:text-2xl xl:text-3xl'>
          <h2>BSc Computer Science (AI)</h2>
          <h2>University of Kent, UK</h2>
        </div>
        <code className='serifText text-lg md:text-2xl xl:text-3xl'>
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
