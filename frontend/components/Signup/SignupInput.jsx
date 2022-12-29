import React from 'react'
import Styles from '../../styles/Home.module.css'

const SignupInput = ({placeholder, errors, errorIcon, cyType, onChange, innerRef, type, className, name, handleOnBlur, handleOnFocus}) => {
  return (

    <div className='relative w-full'>
      {
          errors && errors[name] && errors[name].message !== '' && !errorIcon ? 
          <div className='absolute bg-red-700 rounded-full w-4 h-4 text-white flex justify-center items-center top-3 right-2 p-2.5 text-xs'>
              !
          </div>
          :
          <>
          </>
      }
      {
        errors && errors[name] && errors[name].message && errorIcon ?
        <div className={name === 'firstName' ? 'relative w-full right-42' : name === 'surname'? 'relative w-full' : `${Styles.errorWrapper} relative w-full`}>
          <div className={name ==='surname' ? Styles.surnameWrapper : Styles.Wrapper}>
              <div className={name === 'surname' ? `${Styles.surnameTriangle} left-3 -top-2` : name === 'firstName' ? `${Styles.Triangle} left-34` : `${Styles.Triangle} left-104`}></div>
              <div className='p-3 w-full h-full -mt-5'>
                <p className='text-white text-sm my-auto w-full'>{ errors[name].message }</p>
              </div>
          </div>
        </div>
        :
        <>
        </>
      }
      <input placeholder={placeholder} 
      className={`${className} ${Styles.Input} border-border-1 placeholder-input border-inputBorder px-4 rounded-md w-full`}
      data-cy={cyType}
      type={type}
      onChange={onChange}
      id={name}
      ref={innerRef}
      name={name}
      onBlur={() => handleOnBlur(innerRef, name)}
      onFocus={(e) => handleOnFocus(e, name)}
      onInvalid={(e) => e.preventDefault()}
      />
    </div>
  )
}

export default SignupInput