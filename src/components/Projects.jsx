import React from 'react'
import Waves from '../images/layered-waves-haikei.svg'
import Card from './Card'

export default function Projects({reference}) {
  return (
    <div ref={reference} className='h-full px-56 spacer flex items-center' style={{ backgroundImage: `url(${Waves})` }}>
      <div className='h-4/5 flex justify-center gap-x-16 items-end'>
      <Card size={"sm"} /> <Card/> <Card size={"sm"}/>
      </div>
    </div>
  )
}
