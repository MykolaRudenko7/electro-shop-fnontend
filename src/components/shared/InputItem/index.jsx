import { useEffect, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import styles from 'components/shared/InputItem/InputItem.module.scss'

export default function InputItem({
  id,
  name,
  label,
  type,
  register,
  error,
  ariaLabel,
  autoComplete,
  tabIndex,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [inputType, setInputType] = useState(type)

  useEffect(() => {
    if (type === 'password' && showPassword) {
      setInputType('text')
    } else {
      setInputType(type)
    }
  }, [showPassword, type])

  const togglePasswordIcon = () => {
    setShowPassword(!showPassword)
  }

  const renderPasswordVisibilityIcon = () => {
    if (showPassword) {
      return <BsEyeSlash className={styles.showPasswordButton} onClick={togglePasswordIcon} />
    }

    return <BsEye className={styles.showPasswordButton} onClick={togglePasswordIcon} />
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input
        aria-label={ariaLabel}
        autoComplete={autoComplete}
        className={styles.input}
        id={id}
        name={name}
        {...register}
        tabIndex={tabIndex}
        type={inputType}
      />
      {type === 'password' && renderPasswordVisibilityIcon()}
      {error && <small className={styles.textDanger}>{error.message}</small>}
    </div>
  )
}
