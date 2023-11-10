import styles from 'components/shared/SignUpModal/SuccessSubmitMessage/SuccessSubmitMessage.module.scss'

export default function SuccessSubmitMessage({ closeDialogWindow }) {
  return (
    <>
      <p className={styles.successMessage}>
        Success! 🤌 <span className={styles.successMessageSpan}>Please Sign In</span>
      </p>
      <button
        aria-label="close modal window"
        className={styles.cancelButton}
        onClick={closeDialogWindow}
        tabIndex="0"
        type="button"
      >
        Close Modal
      </button>
    </>
  )
}
