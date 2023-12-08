import React from 'react'

const Input = (props) => {

  const handleChange = (event) => {
      props.setValue(event.target.value);
      console.log(event.target.value)
  }
  return (
    <>
        <input value={props.value} style={props.inputStyle} onChange={handleChange} className='input-field'/>
    </>
  )
}

export default Input
