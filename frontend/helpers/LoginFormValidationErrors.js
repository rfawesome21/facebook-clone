let errors = {
    dateOfBirth: {

    },
    firstName: {
        
    },
    surname: {

    },
    mobileEmail: {

    },
    newPassword: {

    },
    gender: {

    }
}

export default function validate(type, ref) {
    if (type && ref) {
        switch (type) {
            case 'firstName':
                if (ref.current.value === '') {
                    errors.firstName.message = "What's your name?"
                } else {
                    errors.firstName.message = ""
                }
                break
            case 'surname':
                if (ref.current.value === '') {
                    errors.surname.message = "What's your name?"
                } else {
                    errors.surname.message = ""
                }
                break
            case 'mobileEmail':
                if (ref.current.value === '') {
                    errors.mobileEmail.message = "You'll need this to log in and if you ever need to reset your password."
                } else {
                    errors.mobileEmail.message = ""
                }
                break
            case 'newPassword':
                if (ref.current.value === '') {
                    errors.newPassword.message = "Enter a combination of at least 6 numbers, letters and punctuation marks (such as ! and &)."
                } else {
                    errors.newPassword.message = ""
                }
                break
            case 'dateOfBirth':
                if (ref.current.value === '') {
                    errors.dateOfBirth.message = "Enter a combination of at least 6 numbers, letters and punctuation marks (such as ! and &)."
                } else {
                    errors.dateOfBirth.message = ""
                }
                break
            case 'gender':
                if (ref.current.validate === '') {
                    errors.gender.message = 'Please choose a gender. You can change who can see this later.'
                } else {
                    errors.gender.message = ''
                }
        }
        return { errors }
    } else {
        errors.firstName.message = "What's your name?"
        errors.surname.message = "What's your name?"
        errors.mobileEmail.message = "You'll need this to log in and if you ever need to reset your password."
        errors.newPassword.message = "Enter a combination of at least 6 numbers, letters and punctuation marks (such as ! and &)."
        errors.dateOfBirth.message = "It looks like you've entered the wrong info. Please make sure that you use your real date of birth."
        errors.gender.message = 'Please choose a gender. You can change who can see this later.'
        return { errors }

    }
}

export const clearErrors = () => {
    errors = {
        firstName: {
            
        },
        surname: {
    
        },
        mobileEmail: {
    
        },
        newPassword: {
    
        },
        dateOfBirth: {

        },
        gender: {

        }
    }
}