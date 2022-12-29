import React from 'react'

const Input = ({placeholder, cyType, onChange, value, type, className}) => {
  return (
    <input placeholder={placeholder} 
    className={`${className} border-border-1 placeholder-input border-inputBorder px-4 rounded-md w-full`}
    data-cy={cyType}
    type={type}
    onChange={onChange}
    value={value}
    />
  )
}

export default Input