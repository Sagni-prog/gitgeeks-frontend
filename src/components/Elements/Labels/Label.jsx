import React from 'react'

const Label = (props) => {
  return (
    <>
        <label style = {props.labelStyle}>{props.title}</label>
    </>
  )
}

export default Label
