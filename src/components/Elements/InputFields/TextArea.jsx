import React from 'react'

const TextArea = (props) => {

    const handleChange = (event) => {
        props.setValue(event.target.value);
        console.log(event.target.value)
    }

  return (
    <>
      <textarea value={props.value} style={props.inputStyle} onChange={handleChange}  className='text-area'/>
    </>
  )
}

export default TextArea
