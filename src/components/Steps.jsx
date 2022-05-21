import React from 'react'
import Circle from '../images/Circle'

export default function Steps() {

  const mediaWidth = window.innerWidth

  return (mediaWidth >= 1280 ?
    (<div className="grid grid-cols-9 gap-x-6 gap-y-2">

      <div className="justify-self-center"><Circle size={54} /></div>
      <div className="h-1.5 bg-bluePigment-500 rounded-md self-center"></div>
      <div className="justify-self-center"><Circle size={54} /></div>
      <div className="h-1.5 bg-bluePigment-500 rounded-md self-center"></div>
      <div className="justify-self-center"><Circle size={54} /></div>
      <div className="h-1.5 bg-bluePigment-500 rounded-md self-center"></div>
      <div className="justify-self-center"><Circle size={54} /></div>
      <div className="h-1.5 bg-bluePigment-500 rounded-md self-center"></div>
      <div className="justify-self-center"><Circle size={54} /></div>

      <p className="text-xl font-normal text-center">SLO High graduate, US</p>
      <div></div>

      <p className="text-xl font-normal text-center">ITT "Leonardo Da Vinci" graduate, Italy</p>
      <div></div>

      <p className="text-xl font-normal text-center">Started BSc Computer Science (AI), University of Kent</p>
      <div></div>

      <p className="text-xl font-normal text-center">Digital Manufacturing Undergraduate placement role, Pfizer UK</p>
      <div></div>

      <p className="text-xl font-normal text-center">BSc Computer Science (AI) graduate, University of Kent</p>
    </div>
    )
    :
    (
      <div className="grid grid-cols-4 gap-x-6 gap-y-4 w-72 md:w-96">
        <div className="justify-self-center self-center col-span-1"><Circle size={42} /></div>
        <p className="text-xl font-normal self-center col-span-3">SLO High graduate, US</p>
        <div className="h-32 w-1.5 bg-bluePigment-500 rounded-md justify-self-center col-span-1"></div>
        <div className='col-span-3'></div>

        <div className="justify-self-center self-center col-span-1"><Circle size={42} /></div>
        <p className="text-xl font-normal self-center col-span-3">ITT "Leonardo Da Vinci" graduate, Italy</p>
        <div className="h-32 w-1.5 bg-bluePigment-500 rounded-md justify-self-center col-span-1"></div>
        <div className='col-span-3'></div>

        <div className="justify-self-center self-center col-span-1"><Circle size={42} /></div>
        <p className="text-xl font-normal self-center col-span-3">Started BSc Computer Science (AI), University of Kent</p>
        <div className="h-32 w-1.5 bg-bluePigment-500 rounded-md justify-self-center col-span-1"></div>
        <div className='col-span-3'></div>

        <div className="justify-self-center self-center col-span-1"><Circle size={42} /></div>
        <p className="text-xl font-normal self-center col-span-3">Digital Manufacturing Undergraduate placement role, Pfizer UK</p>
        <div className="h-32 w-1.5 bg-bluePigment-500 rounded-md justify-self-center col-span-1"></div>
        <div className='col-span-3'></div>

        <div className="justify-self-center self-center col-span-1"><Circle size={42} /></div>
        <p className="text-xl font-normal self-center col-span-3">BSc Computer Science (AI) graduate, University of Kent</p>
      </div>
    )
  )
}