'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { validationFormRules } from 'lib/validationFormRules'
import styles from 'components/LoginPage/SignInForm/SignInForm.module.scss'

export default function SignInForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const { emailValidation, passwordValidation } = validationFormRules

  const signInFormId = useId()
  const emailInputId = useId()
  const passwordInputId = useId()

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const onFormSubmit = (data) => {
    reset()
    setIsFormSubmitted(true)
  }

  return (
    <div className={styles.signInCustomerBlock}>
      {!isFormSubmitted && (
        <div>
          <h3 className={styles.title}>Registered Customers</h3>
          <p className={styles.subtitle}>
            If you have an account, sign in with your email address.
          </p>
          <form className={styles.form} id={signInFormId} onSubmit={handleSubmit(onFormSubmit)}>
            <div className={styles.inputContainer}>
              <label className={styles.inputLabel} htmlFor={emailInputId}>
                Email *
              </label>
              <input
                aria-label="email input"
                autoComplete="off"
                className={styles.input}
                id={emailInputId}
                name="email_signIn"
                {...register('email_signIn', emailValidation)}
                tabIndex="0"
                type="email"
              />
              {errors.email_signIn && (
                <small className={styles.textDanger}>
                  {errors.email_signIn.type === 'required' && 'Email is required'}
                  {errors.email_signIn.type === 'pattern' && 'Email is not valid'}
                  {errors.email_signIn.type === 'maxLength' && 'Max length is 50 char'}
                </small>
              )}
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.inputLabel} htmlFor={passwordInputId}>
                Password *
              </label>
              <input
                aria-label="password input"
                autoComplete="off"
                className={styles.input}
                id={passwordInputId}
                name="password_signIn"
                {...register('password_signIn', passwordValidation)}
                tabIndex="0"
                type="password"
              />
              {errors.password_signIn && (
                <small className={styles.textDanger}>
                  {errors.password_signIn.type === 'required' && 'Password is required.'}
                  {errors.password_signIn.type === 'minLength' &&
                    'Password should be at least 6 characters'}
                </small>
              )}
            </div>
            <div className={styles.buttonsContainer}>
              <button
                aria-label="sign input"
                className={styles.submitButton}
                tabIndex="0"
                type="submit"
              >
                Sign In
              </button>
              <button
                aria-label="fill user data"
                className={styles.fillButton}
                onClick={() => {
                  setValue('email_signIn', 'Mykola@gmail.com')
                  setValue('password_signIn', 'password1234')
                }}
                tabIndex="0"
                type="button"
              >
                Fill Data
              </button>
              <Link
                aria-label="forgot password"
                className={styles.forgotLink}
                href="#"
                role="button"
                tabIndex="0"
              >
                Forgot Your Password?
              </Link>
            </div>
          </form>
        </div>
      )}
      {isFormSubmitted && <p className={styles.successMessage}>Success! 🤌</p>}
    </div>
  )
}
