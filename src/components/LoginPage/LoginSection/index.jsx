'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from 'hooks/useAuthContext'
import { apiEndpoints } from 'data/shared/apiEndpoints'
import SignInForm from 'components/LoginPage/SignInForm'
import RegistrationInfo from 'components/LoginPage/RegistrationInfo'
import styles from 'components/LoginPage/LoginSection/LoginSection.module.scss'

export default function LoginSection() {
  const { user } = useAuthContext()
  const { profilePageURL } = apiEndpoints
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push(profilePageURL)
    }
  }, [user, router])

  return (
    <section className={styles.loginSection}>
      <SignInForm />
      <RegistrationInfo />
    </section>
  )
}
