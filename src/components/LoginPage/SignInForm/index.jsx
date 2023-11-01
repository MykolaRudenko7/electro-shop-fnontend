'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { generateSignInInputFields } from 'utils/getInputFields'
import Loading from 'app/loading'
import InputItem from 'components/shared/InputItem'
import styles from 'components/LoginPage/SignInForm/SignInForm.module.scss'

export default function SignInForm() {
  const [errorDetails, setErrorDetails] = useState(null)

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const signInFormId = useId()
  const inputFields = generateSignInInputFields(register, errors)

  const onFormSubmit = async (data) => {
    try {
      reset()
    } catch (error) {
      setErrorDetails('An error occurred while submitting the form. Please try again.')
    }
  }

  return (
    <div className={styles.signInCustomerBlock}>
      <div>
        <h3 className={styles.title}>Registered Customers</h3>
        <p className={styles.subtitle}>If you have an account, sign in with your email address.</p>
        <form
          className={styles.form}
          id={signInFormId}
          method="POST"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          {inputFields.map((input) => (
            <InputItem key={input.id} {...input} />
          ))}
          <div className={styles.buttonsContainer}>
            <button
              aria-label="sign input"
              className={styles.submitButton}
              disabled={isSubmitSuccessful}
              tabIndex="0"
              type="submit"
            >
              Sign In
            </button>
            <button
              aria-label="fill user data"
              className={styles.fillButton}
              disabled={isSubmitSuccessful}
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
      <div className={styles.statusMessages}>
        {errorDetails && <p className={styles.submitMessageError}>{errorDetails}</p>}
        {isSubmitSuccessful && isValid && <p className={styles.successMessage}>Success! 🤌</p>}
        {isSubmitting && <Loading />}
      </div>
    </div>
  )
}
