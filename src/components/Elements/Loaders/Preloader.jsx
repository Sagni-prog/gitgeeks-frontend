import React from 'react'
import Spinner from './Spinner'

const Preloader = () => {
  return (
    <div className='w-sceen h-screen flex flex-col justify-center items-center gap-[10%]'>
      <p className='color-primary text-xl'>The world’s oldest wooden wheel has been around for more than 5,000 years</p>
      <Spinner />
    </div>
  )
}

export default Preloader
