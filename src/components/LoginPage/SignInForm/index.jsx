'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { generateSignInInputFields } from 'utils/getInputFields'
import Loading from 'app/loading'
import InputItem from 'components/shared/InputItem'
import styles from 'components/LoginPage/SignInForm/SignInForm.module.scss'

export default function SignInForm() {
  const [errorDetails, setErrorDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const callbackUrl = '/profile'

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const signInFormId = useId()
  const inputFields = generateSignInInputFields(register, errors)

  const onFormSubmit = async (data) => {
    const { email_signIn, password_signIn } = data
    const signInData = { email: email_signIn, password: password_signIn }

    try {
      setIsLoading(true)
      reset()
      const res = await signIn('credentials', { ...signInData })
      setIsLoading(false)

      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        setErrorDetails('Invalid email or password')
      }
    } catch (error) {
      setErrorDetails(error)
    }
  }

  return (
    <div className={styles.signInCustomerBlock}>
      <div>
        <h3 className={styles.title}>Registered Customers</h3>
        <p className={styles.subtitle}>If you have an account, sign in with your email address.</p>
        {isLoading ? (
          <Loading />
        ) : (
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
                disabled={isLoading}
                tabIndex="0"
                type="submit"
              >
                {isLoading ? 'Loading...' : 'Sign In'}
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
            <div className={styles.servicesButtons}>
              <button
                className={styles.googleButton}
                disabled={isLoading}
                onClick={() => signIn('google', { callbackUrl })}
                tabIndex="0"
                type="button"
              >
                Sign With Google
              </button>
              <button
                className={styles.gitHubButton}
                disabled={isLoading}
                onClick={() => signIn('github', { callbackUrl })}
                tabIndex="0"
                type="button"
              >
                Sign With GitHub
              </button>
            </div>
            {errorDetails && <p className={styles.submitMessageError}>{errorDetails}</p>}
          </form>
        )}
      </div>
    </div>
  )
}
