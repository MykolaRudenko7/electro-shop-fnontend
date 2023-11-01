import styles from './InputItem.module.scss'

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
        type={type}
      />
      {error && <small className={styles.textDanger}>{error.message}</small>}
    </div>
  )
}
