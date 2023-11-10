'use client'

import { useAuthContext } from 'hooks/useAuthContext'
import SignInForm from 'components/LoginPage/SignInForm'
import RegistrationInfo from 'components/LoginPage/RegistrationInfo'
import UserAlreadyLoggedInMessage from 'components/LoginPage/LoginSection/UserAlreadyLoggedInMessage'
import styles from 'components/LoginPage/LoginSection/LoginSection.module.scss'

export default function LoginSection() {
  const { user } = useAuthContext()

  return (
    <section className={styles.loginSection}>
      {user ? (
        <UserAlreadyLoggedInMessage />
      ) : (
        <>
          <SignInForm />
          <RegistrationInfo />
        </>
      )}
    </section>
  )
}
