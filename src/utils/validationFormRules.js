import { isValidPhoneNumber } from 'react-phone-number-input'

export const validationFormRules = {
  nameValidation: {
    required: 'Name is required',
    maxLength: { value: 20, message: 'Maximum length is 20 characters' },
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: 'You need to enter only letters.',
    },
  },
  mobileNumberValidation: {
    validate: (value) => isValidPhoneNumber(String(value)) || 'Invalid Phone',
  },
  emailValidation: {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Max length is 50 characters',
    },
  },
  passwordValidation: {
    required: 'Password is required',
    minLength: { value: 6, message: 'Password should be at least 6 characters' },
  },
}
