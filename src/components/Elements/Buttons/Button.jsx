import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className='btn'>
            {props.title}
        </button>
    </>
  )
}

export default Button
