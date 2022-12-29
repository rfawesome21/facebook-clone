import React, { useState } from 'react'
import Styles from '../styles/Home.module.css'
import Image from 'next/image'


const Modal = ({children, close, headText, subHeadText, onClick}) => {

    const [fadeOut, setFadeOut] = useState(false)

    const handleClose = () => {
        setFadeOut(true)
        setTimeout(() => {
            close()
        }, 150)
    }

    return (
            <div className={`fixed inset-0 z-10 overflow-y-auto`} onClick={onClick} >
                <div
                    className={`fixed w-full bg-white h-full opacity-60`}>
                </div>
                <div className={`flex min-h-screen px-4 items-center`}>
                    <div className={fadeOut ? `${Styles.ModalUnAnimate} relative md:w-6/12 md:h-4.5/12 xl:w-3.7/12 mx-auto bg-white rounded-md shadow-lg` : `${Styles.ModalAnimate} relative md:w-6/12 md:h-4.5/12 xl:w-3.7/12 mx-auto bg-white rounded-md shadow-lg`}>
                        <div className='flex flex-col'>
                            <div className='flex justify-between p-4'>
                                <div>
                                    <h2 className='lg:text-3.5xl font-semibold leading-9'>{headText}</h2>
                                    {subHeadText? <p>{subHeadText}</p> : <></> }
                                </div>
                                <div className='' onClick={handleClose}>
                                <Image src={'/cross.png'} alt='close' width={24} height={24} />
                                </div>
                            </div>
                    </div>
                        {children}
                    </div>
                </div>
            </div>
    )
}

export default Modal