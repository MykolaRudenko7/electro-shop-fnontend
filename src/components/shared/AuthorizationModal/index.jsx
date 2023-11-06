import { useRef, useState } from 'react'
import UserRegistrationForm from 'components/shared/AuthorizationModal/UserRegistrationForm'
import SuccessSubmitMessage from 'components/shared/AuthorizationModal/SuccessSubmitMessage'
import 'react-phone-number-input/style.css'
import styles from 'components/shared/AuthorizationModal/AuthorizationModal.module.scss'

export default function AuthorizationModal() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const modalRef = useRef()

  const openDialogWindow = () => {
    modalRef.current.showModal()
  }
  const closeDialogWindow = () => {
    modalRef.current.close()
  }

  return (
    <>
      <dialog className={styles.modal} ref={modalRef}>
        {!isFormSubmitted ? (
          <UserRegistrationForm
            closeDialogWindow={closeDialogWindow}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
          />
        ) : (
          <SuccessSubmitMessage closeDialogWindow={closeDialogWindow} />
        )}
      </dialog>
      <button
        aria-label="open modal window"
        className={styles.createAnAccountButton}
        onClick={openDialogWindow}
        tabIndex="0"
        type="button"
      >
        Create An Account
      </button>
    </>
  )
}
