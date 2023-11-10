import { useRef, useState } from 'react'
import SignUpForm from 'components/shared/SignUpModal/SignUpForm'
import SuccessSubmitMessage from 'components/shared/SignUpModal/SuccessSubmitMessage'
import 'react-phone-number-input/style.css'
import styles from 'components/shared/SignUpModal/SignUpModal.module.scss'

export default function SignUpModal() {
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
          <SignUpForm
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
