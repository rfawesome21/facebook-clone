import React from 'react'

const Button = ({onClick, text, className}) => {
  return (
    <button
    onClick={onClick}
    className={`${className} bg-signup-button text-white text-center mx-auto rounded-md font-semibold`}
    >
        {text}
    </button>
  )
}

export default Button