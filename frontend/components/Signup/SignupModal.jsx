import React, { useEffect, useRef, useState } from 'react'
import Modal from '../Modal'
import SignupInput from './SignupInput'
import Styles from '../../styles/Home.module.css'
import SignupSelect from './SignupSelect'
import { birthdayPronouns, months } from '../../helpers/Constants'
import SignupRadioButton from './SignupRadioButton'
import Button from '../Button'
import { useForm } from '../../helpers/hooks/UseForm'


const SignupModal = ({close}) => {
    const { errors, 
        handleOnBlur, 
        firstNameErrorIcon, 
        handleOnFocus, 
        surnameErrorIcon,
        mobileEmailErrorIcon,
        passwordErrorIcon,
        dateOfBirthErrorIcon,
        genderErrorIcon,
        resetState,
        handleSubmit,
        handleRadioClick,
        hideErrorWrapper
    } = useForm()
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState('')
    const [year, setYear] = useState(0)
    const [pronouns, setPronouns] = useState('Select your pronouns')
    const [gender, setGender] = useState('')
    const [informationBox, setShowInformationBox] = useState(false)
    const [genderInformationBox, setGenderInformationBox] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    const firstName = useRef()
    const surname = useRef()
    const mobileNumber = useRef()
    const password = useRef()

    const errorInputClass = 'border-border-1 border-red-700 focus:outline-none focus:border-inputBorde'
    const inputClass = `bg-input-gray focus:outline-none`
    const radioClass = `focus:outline-none`

    useEffect(() => {
        let newDate = new Date()
        setDay(newDate.getDate())
        setMonth(months[newDate.getMonth()])
        setYear(newDate.getFullYear())
    }, [])

    const displayInformation = (text) => {
        return (
            <div className={!fadeOut ? `${Styles.Box} ${Styles.ModalAnimate} absolute bg-white shadow-xl p-3 border-0.5 border-black z-50` : `absolute bg-white shadow-xl p-3 border-0.5 border-black ${Styles.BoxFadeOut}`} 
            dangerouslySetInnerHTML={{__html : text}}>
            </div>
        )
    }

    const closeBoxes = () => {
        if (informationBox || genderInformationBox)
        {
            setFadeOut(true)
            setTimeout(() => {
                setGenderInformationBox(false)
                setShowInformationBox(false)
            }, 150)
            return
        }
        setFadeOut(false)
    }

    const closeModal = () => {
        resetState()
        close()
    }

    const onChangeHandler = (e) => {
    }

    return (
        <Modal headText={'Sign Up'} subHeadText={"It's quick and easy"} close={closeModal} onClick={closeBoxes}>
            <hr className='text-hr-gray' />
            <div className='flex flex-col p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <div className='relative w-full'>
                            <SignupInput 
                            name={'firstName'}
                            errorIcon={firstNameErrorIcon}
                            onChange={onChangeHandler}
                            innerRef={firstName} 
                            placeholder={'First Name'} 
                            handleOnBlur={handleOnBlur}
                            handleOnFocus={handleOnFocus}
                            errors={errors}
                            className={errors.firstName && errors.firstName.message && !firstNameErrorIcon ? errorInputClass : inputClass} />
                        </div>
                        <div className='ml-3 w-full relative'>
                            <SignupInput 
                            placeholder={'Surname'}
                            name={'surname'}
                            innerRef={surname} 
                            handleOnBlur={handleOnBlur}
                            handleOnFocus={handleOnFocus}
                            onChange={onChangeHandler}
                            errors={errors}
                            errorIcon={surnameErrorIcon}
                            className={errors.surname && errors.surname.message && !surnameErrorIcon ? errorInputClass : inputClass} />
                        </div>
                    </div>
                    <div className='relative w-full mt-3'>
                    <SignupInput 
                    placeholder={'Mobile Number or email address'} 
                    innerRef={mobileNumber}
                    errors={errors}
                    handleOnBlur={handleOnBlur}
                    handleOnFocus={handleOnFocus}
                    name={'mobileEmail'}
                    errorIcon={mobileEmailErrorIcon}
                    className={errors.mobileEmail && errors.mobileEmail.message && !mobileEmailErrorIcon ? errorInputClass : inputClass} />
                    </div>
                    <div className='relative w-full mt-3'>
                        <SignupInput 
                        placeholder={'New password'} 
                        errors={errors}
                        innerRef={password}
                        errorIcon={passwordErrorIcon}
                        name='newPassword'
                        handleOnBlur={handleOnBlur}
                        handleOnFocus={handleOnFocus}
                        className={errors.newPassword && errors.newPassword.message && !passwordErrorIcon ? errorInputClass : inputClass} />
                    </div>
                    <div className='relative flex flex-col'>
                        <div className='mt-3 text-xs text-label'>Date of birth <span 
                            onClick={() => {!genderInformationBox ? setShowInformationBox(true) : ''}}
                            className={!genderInformationBox ? 
                            `${Styles.Question} rounded-full text-white px-1 cursor-pointer` 
                            : 
                            `${Styles.Question} rounded-full text-white px-1 cursor-default`}>
                            ?
                            </span>
                            {informationBox ? displayInformation(`<p><span class='font-bold'>Providing your birthday</span> helps make sure \
                            that you get the right Facebook experience for your age. \
                            If you want to change who sees this, go to the \
                            About section of your profile. For more details, \
                            please visit our <a class='text-blue-600 cursor-pointer'>Privacy Policy.</a></p>`) : <></>}
                            {
                                errors && errors['dateOfBirth'] && errors['dateOfBirth'].message !== '' && !dateOfBirthErrorIcon ? 
                                <div 
                                className='absolute bg-red-700 rounded-full w-4 h-4 text-white flex justify-center items-center top-3 right-2 p-2.5 text-xs'
                                onClick={() => handleRadioClick('dateOfBirth')}
                                >
                                    !
                                </div>
                                :
                                <>
                                </>
                            }
                            {
                                errors && errors['dateOfBirth'] && errors['dateOfBirth'].message && dateOfBirthErrorIcon ?
                                <div className={`${Styles.errorWrapper} relative w-full`} onClick={() => hideErrorWrapper('dateOfBirth')}>
                                <div className={Styles.Wrapper}>
                                    <div className={`${Styles.Triangle} left-104`}></div>
                                    <div className='p-3 w-full h-full -mt-5'>
                                        <p className='text-white text-sm my-auto w-full'>{ errors['dateOfBirth'].message }</p>
                                    </div>
                                </div>
                                </div>
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className='flex mt-1 w-full justify-between'>
                            <SignupSelect value={day} type='day' onChange={e => setDay(e.target.value)} name='dateOfBirth' 
                            style={errors.dateOfBirth && errors.dateOfBirth.message && !dateOfBirthErrorIcon ? `${errorInputClass} md:w-20 xl:w-30` : `${radioClass} md:w-20 xl:w-30 border-border-1 border-gray-300`} 
                            handleOnFocus={handleOnFocus}
                            />
                            <SignupSelect value={month} type='month' onChange={e => setMonth(e.target.value)} name='dateOfBirth'
                            style={errors.dateOfBirth && errors.dateOfBirth.message && !dateOfBirthErrorIcon ? `${errorInputClass} md:w-20 xl:w-30` : `${radioClass} md:w-20 xl:w-30 border-border-1 border-gray-300`} 
                            handleOnFocus={handleOnFocus}
                            />
                            <SignupSelect value={year} type='year' onChange={e => setYear(e.target.value)} name='dateOfBirth' 
                            style={errors.dateOfBirth && errors.dateOfBirth.message && !dateOfBirthErrorIcon ? `${errorInputClass} md:w-20 xl:w-30` : `${radioClass} md:w-20 xl:w-30 border-border-1 border-gray-300`} 
                            handleOnFocus={handleOnFocus}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col relative'>
                        <div className='mt-3 text-xs text-label'>Gender <span 
                            onClick={() => {
                            !informationBox ? setGenderInformationBox(true) : ''}} 
                            className={!informationBox ? `${Styles.Question} rounded-full text-white px-1 cursor-pointer` : `${Styles.Question} rounded-full text-white px-1 cursor-default`}>
                            ?
                        </span>
                        {
                                errors && errors['gender'] && errors['gender'].message !== '' && !genderErrorIcon ? 
                                <div 
                                className='absolute bg-red-700 rounded-full w-4 h-4 text-white flex justify-center items-center top-3 right-2 p-2.5 text-xs'
                                onClick={() => handleRadioClick('gender')}
                                >
                                    !
                                </div>
                                :
                                <>
                                </>
                        }
                        {
                                errors && errors['gender'] && errors['gender'].message && genderErrorIcon ?
                                <div className={`${Styles.errorWrapper} relative w-full`} onClick={() => hideErrorWrapper('gender')}>
                                <div className={Styles.Wrapper}>
                                    <div className={`${Styles.Triangle} left-104`}></div>
                                    <div className='p-3 w-full h-full -mt-5'>
                                        <p className='text-white text-sm my-auto w-full'>{ errors['gender'].message }</p>
                                    </div>
                                </div>
                                </div>
                                :
                                <>
                                </>
                        }
                        {genderInformationBox ? displayInformation(`You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.`) : <></>}
                        </div>
                        <div className='flex mt-1 w-full justify-between'>
                            <SignupRadioButton 
                            value={'male'} 
                            onChange={e => setGender(e.target.value)} label={'Male'} name={'gender'} id='male' className={errors.gender && errors.gender.message && !genderErrorIcon ? `${errorInputClass}` : `${radioClass} border-border-1 border-gray-300`}
                            handleOnFocus={handleOnFocus}
                            />
                            <SignupRadioButton 
                            value={'female'} 
                            onChange={e => setGender(e.target.value)} label={'Female'} name={'gender'} id='female' className={errors.gender && errors.gender.message && !genderErrorIcon ? `${errorInputClass}` : `${radioClass} border-border-1 border-gray-300`}
                            handleOnFocus={handleOnFocus}
                            />
                            <SignupRadioButton 
                            value={'custom'} 
                            onChange={e => setGender(e.target.value)} label={'Custom'} name={'gender'} id='custom' 
                            className={errors.gender && errors.gender.message && !genderErrorIcon ? `${errorInputClass}` : `${radioClass} border-border-1 border-gray-300`} 
                            handleOnFocus={handleOnFocus}
                            />
                        </div>
                        {gender === 'custom' ? 
                        <div className='flex flex-col mt-3'>
                            <SignupSelect value={pronouns} data={birthdayPronouns} onChange={e => setPronouns(e.target.value)} handleOnFocus={handleOnFocus} />
                            <p className='mt-1 text-xs text-label'>Your pronoun is visible to everyone</p>
                            <SignupInput placeholder={'Gender(optional)'} className='bg-input-gray focus:outline-none mt-1' handleOnFocus={handleOnFocus} handleOnBlur={handleOnBlur} />
                        </div>
                        : <></>}
                    </div>
                    <p className='mt-3 text-xxs text-label'>People who use our service may have uploaded your contact information to Facebook. <a>Learn more.</a></p>
                    <p className='mt-1 text-xxs text-label'>
                    By clicking Sign Up, you agree to our <a className='text-blue-600 cursor-pointer'>Terms.</a> Learn how we collect, use and share your data in our <a className='text-blue-600 cursor-pointer'>Privacy Policy</a> and how we use cookies and similar technology in our <a className='text-blue-600 cursor-pointer'>Cookies Policy.</a> You may receive SMS notifications from us and can opt out at any time.
                    </p>
                    <div className='flex justify-center mt-2'>
                        <Button text={'Sign Up'}
                        className={'py-2 px-16'} />
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default SignupModal