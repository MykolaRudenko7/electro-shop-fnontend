import { useId, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import { validationFormRules } from 'utils/validationFormRules'
import { generateRegistrationInputFields } from 'utils/getInputFields'
import Loading from 'app/loading'
import InputItem from 'components/shared/InputItem'
import 'react-phone-number-input/style.css'
import styles from 'components/shared/AuthorizationModal/UserRegistrationForm/UserRegistrationForm.module.scss'

export default function UserRegistrationForm({ setIsFormSubmitted, closeDialogWindow }) {
  const [errorDetails, setErrorDetails] = useState(null)

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    control,
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const formNewUserId = useId()
  const mobileNumberInputId = useId()
  const { mobileNumberValidation } = validationFormRules
  const inputFields = generateRegistrationInputFields(register, errors)

  const fillNewUserData = () => {
    setValue('name_newUser', 'Mykola')
    setValue('email_newUser', 'Mykola@gmail.com')
    setValue('mobileNumber_newUser', '+380951970401')
    setValue('password_newUser', 'password1234')
  }

  const onFormSubmit = async (data) => {
    try {
      reset()
      setIsFormSubmitted(true)
    } catch (error) {
      setErrorDetails('An error occurred while submitting the form. Please try again.')
      setIsFormSubmitted(false)
    }
  }

  return (
    <form
      className={styles.form}
      id={formNewUserId}
      method="dialog"
      onSubmit={handleSubmit(onFormSubmit)}
    >
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
              aria-label="mobile number input"
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
        {errors.mobileNumber_newUser && <small className={styles.textDanger}>Invalid Phone</small>}
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
          disabled={isSubmitSuccessful}
          form={formNewUserId}
          type="submit"
        >
          Create
        </button>
        <button
          aria-label="fill user data"
          className={styles.fillButton}
          disabled={isSubmitSuccessful}
          onClick={fillNewUserData}
          tabIndex="0"
          type="button"
        >
          Fill data
        </button>
      </div>
      <div className={styles.statusMessages}>
        {isSubmitting && <Loading />}
        {errorDetails && <p className={styles.submitMessageError}>{errorDetails}</p>}
      </div>
    </form>
  )
}
