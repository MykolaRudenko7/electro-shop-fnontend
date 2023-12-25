'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
import { redirectEndpoints } from 'data/shared/redirectEndpoints'
import UserRegistrationService from 'services/userRegistrationService'
import { generateSignInInputFields } from 'utils/getInputFields'
import { useAuthContext } from 'hooks/useAuthContext'
import Loading from 'app/loading'
import InputItem from 'components/shared/InputItem'
import styles from 'components/LoginPage/SignInForm/SignInForm.module.scss'

export default function SignInForm() {
  const [submitErrorDetails, setSubmitErrorDetails] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useAuthContext()

  const router = useRouter()
  const { profileUrl } = redirectEndpoints

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
    try {
      const apiResponse = await UserRegistrationService.signInUser(data)

      if (apiResponse?.data?.success) {
        setIsLoading(true)
        reset()
        setSubmitErrorDetails('')
        setUser(apiResponse.data.user)
        router.push(profileUrl)
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.error
        setSubmitErrorDetails(errorMessage)
      }
      setIsLoading(false)
    }
  }

  const isAccountLocked =
    submitErrorDetails?.includes('Account is locked.') ||
    submitErrorDetails?.includes('Too many login attempts.')

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
                disabled={isLoading || isAccountLocked}
                form={signInFormId}
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
            {submitErrorDetails && (
              <p className={styles.submitMessageError}>{submitErrorDetails}</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
