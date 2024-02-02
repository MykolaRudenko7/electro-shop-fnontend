'use client'

import { useId, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import { AxiosError } from 'axios'
import { apiEndpoints } from 'data/shared/apiEndpoints'
import { validationFormRules } from 'utils/validationFormRules'
import { generateRegistrationInputFields } from 'utils/getInputFields'
import UserRegistrationService from 'services/userRegistrationService'
import { useAuthContext } from 'hooks/useAuthContext'
import Loading from 'app/loading'
import InputItem from 'components/shared/InputItem'
import 'react-phone-number-input/style.css'
import styles from 'components/shared/SignUpModal/SignUpForm/SignUpForm.module.scss'

export default function SignUpForm({ isFormSubmitted, setIsFormSubmitted, closeDialogWindow }) {
  const [submitErrorDetails, setSubmitErrorDetails] = useState('')
  const { setUser } = useAuthContext()

  const router = useRouter()
  const { profilePageURL } = apiEndpoints

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const formNewUserId = useId()
  const mobileNumberInputId = useId()

  const { mobileNumberValidation } = validationFormRules
  const inputFields = generateRegistrationInputFields(register, errors, watch)

  const onFormSubmit = async (data) => {
    try {
      const apiResponse = await UserRegistrationService.signUpUser(data)

      if (apiResponse?.data?.success) {
        setIsFormSubmitted(true)
        reset()
        setSubmitErrorDetails('')
        setUser(apiResponse.data.user)
        router.push(profilePageURL)
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.error
        setSubmitErrorDetails(errorMessage)
        setIsFormSubmitted(false)
      }
    }
  }

  return (
    <form
      className={styles.form}
      data-test-id="signUpForm"
      id={formNewUserId}
      method="POST"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      {isFormSubmitted ? (
        <Loading />
      ) : (
        <>
          {inputFields.map((input) => (
            <InputItem key={input.id} {...input} />
          ))}
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor={mobileNumberInputId}>
              Mobile number *
            </label>
            <Controller
              control={control}
              name="mobileNumber_newUser"
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  aria-label="sign up mobile number input"
                  autoComplete="off"
                  className={styles.input}
                  defaultCountry="UA"
                  id={mobileNumberInputId}
                  onChange={onChange}
                  tabIndex="0"
                  value={value}
                />
              )}
              rules={mobileNumberValidation}
            />
            {errors.mobileNumber_newUser && (
              <small className={styles.textDanger}>Invalid Phone</small>
            )}
          </div>
          <div className={styles.buttonsContainer}>
            <button
              aria-label="close modal window"
              className={styles.cancelButton}
              onClick={closeDialogWindow}
              tabIndex="0"
              type="button"
            >
              Cancel
            </button>
            <button
              aria-label="create an account"
              className={styles.confirmButton}
              disabled={isFormSubmitted}
              form={formNewUserId}
              type="submit"
            >
              Create
            </button>
          </div>
          <div className={styles.statusMessages}>
            {submitErrorDetails && (
              <p className={styles.submitMessageError} data-test-id="signUpErrorMessage">
                {submitErrorDetails}
              </p>
            )}
          </div>
        </>
      )}
    </form>
  )
}
