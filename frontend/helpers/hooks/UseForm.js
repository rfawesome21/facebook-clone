import React, { useContext, useState } from 'react'
import validate, { clearErrors } from '../LoginFormValidationErrors'

export const useForm = () => {
    const [errors, setErrors] = useState({})
    const [firstNameErrorIcon, setFirstNameErrorIcon] = useState(true)
    const [surnameErrorIcon, setSurnameErrorIcon] = useState(true)
    const [mobileEmailErrorIcon, setMobileEmailErrorIcon] = useState(true)
    const [passwordErrorIcon, setPasswordErrorIcon] = useState(true)
    const [dateOfBirthErrorIcon, setDateOfBirthErrorIcon] = useState(true)
    const [genderErrorIcon, setGenderErrorIcon] = useState(true)

    const setInputFields = (type, boolean) => {
        switch(type) {
            case 'firstName':
                setFirstNameErrorIcon(boolean)
                break
            case 'surname':
                setSurnameErrorIcon(boolean)
                break
            case 'mobileEmail':
                setMobileEmailErrorIcon(boolean)
                break
            case 'newPassword':
                setPasswordErrorIcon(boolean)
                break
            case 'dateOfBirth':
                setDateOfBirthErrorIcon(boolean)
                break
            case 'gender':
                setGenderErrorIcon(boolean)
                break
        }
    }

    const handleOnBlur = (ref, type) => {
        const {errors} = validate(type, ref)
        setErrors(errors)
        setInputFields(type, false)
    }

    const handleOnFocus = (e, type) => {
        e.preventDefault();
        setInputFields(type, true)
    }

    const resetState = () => {
        setErrors({})
        clearErrors()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { errors } = validate()
        setInputFields('firstName', false)
        setInputFields('surname', false)
        setInputFields('mobileEmail', false)
        setInputFields('newPassword', false)
        setInputFields('dateOfBirth', false)
        setInputFields('gender', false)
        setErrors(errors)
    }

    const handleRadioClick = (type) => {
        setInputFields(type, true)
    }

    const hideErrorWrapper = (type) => {
        switch (type) {
            case 'dateOfBirth':
                setDateOfBirthErrorIcon(false)
                break
            case 'gender':
                setGenderErrorIcon(false)
                break
        }
    }

    return {
        handleOnBlur,
        handleOnFocus,
        handleSubmit,
        handleRadioClick,
        errors,
        firstNameErrorIcon,
        surnameErrorIcon,
        mobileEmailErrorIcon,
        passwordErrorIcon, 
        dateOfBirthErrorIcon,
        genderErrorIcon,
        hideErrorWrapper,
        resetState
    }
}
