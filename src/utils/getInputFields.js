import { useId } from 'react'
import { validationFormRules } from 'utils/validationFormRules'

const { emailValidation, passwordValidation, nameValidation } = validationFormRules

export const generateSignInInputFields = (register, errors) => [
  {
    id: useId(),
    name: 'email_signIn',
    label: 'Email *',
    type: 'email',
    register: register('email_signIn', emailValidation),
    error: errors.email_signIn,
    ariaLabel: 'email input',
    autoComplete: 'on',
    tabIndex: '0',
  },
  {
    id: useId(),
    name: 'password_signIn',
    label: 'Password *',
    type: 'password',
    register: register('password_signIn', passwordValidation),
    error: errors.password_signIn,
    ariaLabel: 'password input',
    autoComplete: 'on',
    tabIndex: '0',
  },
]

export const generateRegistrationInputFields = (register, errors) => [
  {
    id: useId(),
    name: 'name_newUser',
    label: 'Name *',
    type: 'text',
    register: register('name_newUser', nameValidation),
    error: errors.name_newUser,
    ariaLabel: 'name input',
    autoComplete: 'off',
    tabIndex: '0',
  },
  {
    id: useId(),
    name: 'email_newUser',
    label: 'Email *',
    type: 'email',
    register: register('email_newUser', emailValidation),
    error: errors.email_newUser,
    ariaLabel: 'email input',
    autoComplete: 'off',
    tabIndex: '0',
  },
  {
    id: useId(),
    name: 'password_newUser',
    label: 'Password *',
    type: 'password',
    register: register('password_newUser', passwordValidation),
    error: errors.password_newUser,
    ariaLabel: 'password input',
    autoComplete: 'off',
    tabIndex: '0',
  },
]