import { useId } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import { validationFormRules } from 'lib/validationFormRules'
import 'react-phone-number-input/style.css'
import styles from 'components/shared/AuthorizationModal/UserRegistrationForm/UserRegistrationForm.module.scss'

export default function UserRegistrationForm({ setIsFormSubmitted, closeDialogWindow }) {
  const { nameValidation, mobileNumberValidation, emailValidation, passwordValidation } =
    validationFormRules
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const formNewUserId = useId()
  const nameInputId = useId()
  const mobileNumberInputId = useId()
  const emailInputId = useId()
  const passwordInputId = useId()

  const onFormSubmit = (data) => {
    reset()
    setIsFormSubmitted(true)
  }

  return (
    <form
      className={styles.form}
      id={formNewUserId}
      method="dialog"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor={nameInputId}>
          Name *
        </label>
        <input
          autoComplete="off"
          className={styles.input}
          id={nameInputId}
          name="name_newUser"
          {...register('name_newUser', nameValidation)}
          aria-label="name input"
          tabIndex="0"
          type="text"
        />
        {errors.name_newUser && (
          <small className={styles.textDanger}>
            {errors.name_newUser.type === 'maxLength' && 'Maximum length is 20 characters'}
            {errors.name_newUser.type === 'pattern' && 'You need to enter only letters.'}
            {errors.name_newUser.type === 'required' && 'Name is required.'}
          </small>
        )}
      </div>
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
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor={emailInputId}>
          Email *
        </label>
        <input
          aria-label="email input"
          autoComplete="off"
          className={styles.input}
          id={emailInputId}
          name="email_newUser"
          {...register('email_newUser', emailValidation)}
          tabIndex="0"
          type="email"
        />
        {errors.email_newUser && (
          <small className={styles.textDanger}>
            {errors.email_newUser.type === 'required' && 'Email is required'}
            {errors.email_newUser.type === 'pattern' && 'Max length is 50 char'}
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
          name="password_newUser"
          {...register('password_newUser', passwordValidation)}
          tabIndex="0"
          type="password"
        />
        {errors.password_newUser && (
          <small className={styles.textDanger}>
            {errors.password_newUser.type === 'required' && 'Password is required.'}
            {errors.password_newUser.type === 'minLength' &&
              'Password should be at least 6 characters'}
          </small>
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
          form={formNewUserId}
          type="submit"
        >
          Create
        </button>
        <button
          aria-label="fill user data"
          className={styles.fillButton}
          onClick={() => {
            setValue('name_newUser', 'Mykola')
            setValue('email_newUser', 'Mykola@gmail.com')
            setValue('mobileNumber_newUser', '+380951970401')
            setValue('password_newUser', 'password1234')
          }}
          tabIndex="0"
          type="button"
        >
          Fill data
        </button>
      </div>
    </form>
  )
}
