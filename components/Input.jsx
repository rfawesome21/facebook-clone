import React from 'react'

const Input = ({placeholder, type}) => {
  return (
    <input placeholder={placeholder} 
    className='border-border-1 py-4 border-inputBorder px-4 rounded-md w-full pt-2 focus:outline-inputOutline'
    data-cy={type}
    type='text'
    />
  )
}

export default Input