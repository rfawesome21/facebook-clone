import React from 'react'

const SignupRadioButton = ({value, onChange, label, name, id, className, handleOnFocus}) => {
  console.log(className)
  return (
    <div className={`${className} flex justify-between  rounded-md w-30 px-2 py-1`}>
        <label htmlFor={id} className='flex w-full'>{label}
            <input
                type={'radio'}
                value={value}
                onChange={onChange}
                name = {name}
                id = {id}
                className={`ml-auto`}
                onFocus={(e) => handleOnFocus(e, name)}
            />
        </label>
    </div>
  )
}

export default SignupRadioButton