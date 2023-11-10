import { isValidPhoneNumber } from 'react-phone-number-input'

export const validationFormRules = {
  nameValidation: {
    required: 'Name is required',
    maxLength: { value: 20, message: 'Maximum length is 20 characters' },
    minLength: { value: 4, message: 'Minimum length is 4 characters' },
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
    maxLength: { value: 30, message: 'Password should be no more than 6 characters' },
  },
  confirmPasswordValidation: (password) => ({
    required: 'Confirm Password is required',
    validate: (value) => value === password || 'The passwords do not match',
  }),
}
