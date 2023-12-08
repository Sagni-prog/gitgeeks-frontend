import React from 'react'

const Button = (props) => {
  return (
    <>
        <button style={props.buttStyle} className='btn flex items-center'>
             {props.icons}
             <span className='flex justify-center items-center content-center w-[100%] h-[100%] '>
                {props.title}
             </span>
        </button>
    </>
  )
}

export default Button;
 