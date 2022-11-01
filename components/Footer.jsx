import React from 'react'
import Features from '../data/Features'
import Languages from '../data/Languages'

const Footer = () => {
  return (
    <div className='flex flex-col xl:mx-60 mt-8'>
        <div className='flex xs:flex-wrap md:flex-nowrap'>
        {
            Languages.map((language, index) => {
                return (
                    <p key={index} className='text-xs ml-2 pt-2 text-footer-gray'>{ language.name }</p>
                )
            })
        }
        </div>
        <hr className='text-gray-200 mt-3' />
        <div className='flex flex-wrap'>
        {
            Features.map((feature, index) => {
                return (
                    <p key={index} className='text-xs ml-2 pt-2 text-footer-gray-inactive'>{ feature.name }</p>
                )
            })
        }
        </div>
        <p className='text-xs ml-2 pt-2 text-footer-gray-inactive'>Meta © 2022</p>
    </div>
  )
}

export default Footer