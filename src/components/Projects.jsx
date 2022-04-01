import React from 'react'
import Waves from '../images/layered-waves-haikei.svg'
import Card from './Card'
import CardSlider from './CardSlider'

export default function Projects({reference}) {

  return (
    <div ref={reference} className='h-full px-20 xl:px-32 spacer' style={{ backgroundImage: `url(${Waves})` }}>
      <div className='h-full py-24 2xl:py-6 flex flex-col lg:flex-row 
      justify-center gap-x-10 gap-y-8 items-center relative'>
      {/* <Card size={"sm"} /> <Card/> <Card size={"sm"}/> */}
      <CardSlider />
      </div>
    </div>
  )
}
