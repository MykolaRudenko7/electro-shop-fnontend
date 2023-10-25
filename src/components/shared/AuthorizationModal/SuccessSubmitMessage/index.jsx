import styles from 'components/shared/AuthorizationModal/SuccessSubmitMessage/SuccessSubmitMessage.module.scss'

export default function SuccessSubmitMessage({ closeDialogWindow }) {
  return (
    <>
      <p className={styles.successMessage}>Success! 🤌</p>
      <button
        aria-label="close modal window"
        className={styles.cancelButton}
        onClick={closeDialogWindow}
        tabIndex="0"
        type="button"
      >
        Cancel
      </button>
    </>
  )
}
