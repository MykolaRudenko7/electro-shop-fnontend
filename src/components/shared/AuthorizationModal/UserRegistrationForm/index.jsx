import { useId, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import { validationFormRules } from 'utils/validationFormRules'
import { generateRegistrationInputFields } from 'utils/getInputFields'
import UserRegistrationService from 'services/userRegistrationService'
import Loading from 'app/loading'
import InputItem from 'components/shared/InputItem'
import 'react-phone-number-input/style.css'
import styles from 'components/shared/AuthorizationModal/UserRegistrationForm/UserRegistrationForm.module.scss'

export default function UserRegistrationForm({
  isFormSubmitted,
  setIsFormSubmitted,
  closeDialogWindow,
}) {
  const [errorDetails, setErrorDetails] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const formNewUserId = useId()
  const mobileNumberInputId = useId()
  const { mobileNumberValidation } = validationFormRules
  const inputFields = generateRegistrationInputFields(register, errors)

  const onFormSubmit = async (data) => {
    try {
      await UserRegistrationService.registerUser(data)
      setIsFormSubmitted(true)
      reset()
    } catch (error) {
      setErrorDetails('This user already exists')
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
      {isSubmitting ? (
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
        </>
      )}
      <div className={styles.statusMessages}>
        {errorDetails && <p className={styles.submitMessageError}>{errorDetails}</p>}
      </div>
    </form>
  )
}
