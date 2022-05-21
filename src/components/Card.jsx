import React, { useState, useEffect } from 'react'
import Sample from '../images/Sample'
import { FaJsSquare, FaPython, FaJava } from 'react-icons/fa'
import { SiHaskell } from 'react-icons/si'

export default function Card({ sm, title, desc, url }) {
  const [languages, setLanguages] = useState(["Java"])

  const getLanguages = () => {
    fetch(`https://api.github.com/users/Danvs60/${title}/languages`)
      .then(res => res.json())
      .then(data => setLanguages(Object.keys(data)))
  }

  const printIcon = (lang) => {
    switch (lang) {
      case "Java":
        return (<FaJava />)
      case "JavaScript":
        return (<FaJsSquare />)
      case "Haskell":
        return (<SiHaskell />)
      case "Python":
        return (<FaPython />)

      default:
        break;
    }
  }

  // useEffect(() => {
  //   getLanguages()
  // }, [])

  return (
    <div className={`w-full h-full flex lg:flex-col justify-between gap-y-8 gap-x-12 motion-safe:animate-fadeIn px-6 py-4 md:px-10 md:py-6 rounded-xl shadow-xl text-gray-800 bg-mistyRose-500 
    ${sm ? "lg:h-3/5 lg:w-2/4" : "lg:h-5/6 lg:w-2/3"}`}>
      {window.innerWidth > 1280 && <section className='w-1/3 lg:w-full lg:h-1/4'>
        <Sample />
      </section>}
      <section className='h-full'>
        <h2 className='text-lg lg:text-2xl 2xl:text-4xl font-bold text-bluePigment-500'>{title}</h2>
        <p className='serifText text-xs lg:text-base 2xl:text-2xl mt-4'>
          {desc}
        </p>
      </section>
      <section className='text-bluePigment-500 flex flex-col gap-y-4 justify-between'>
        <div className='text-xs lg:text-base'>
          <h3>Languages used:</h3>
          <div className='mt-2 flex gap-x-2'>
            {languages.map(lang => (printIcon(lang)))}
          </div>
        </div>
        <a target="_blank" rel='noreferrer' className='text-center w-full px-2 py-2 lg:px-6 lg:py-3 text-xs lg:text-xl font-semibold rounded-2xl shadow-2xl bg-bluePigment-500 text-gray-100' href={url}>See more</a>
      </section>
    </div>
  )
}
