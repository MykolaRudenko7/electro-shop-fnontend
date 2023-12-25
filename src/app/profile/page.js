'use client'

import { useRouter } from 'next/navigation'
import UserRegistrationService from 'services/userRegistrationService'
import { redirectEndpoints } from 'data/shared/redirectEndpoints'
import { useAuthContext } from 'hooks/useAuthContext'
import LoaderLine from 'components/LoaderLine'
import styles from 'app/profile/Profile.module.scss'

export default function Profile() {
  const { user, setUser } = useAuthContext()
  const router = useRouter()
  const { loginUrl } = redirectEndpoints

  const handleLogOut = async () => {
    try {
      const apiResponse = await UserRegistrationService.logOutUser()

      if (apiResponse?.data?.success) {
        setUser(null)
        router.push(loginUrl)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  if (user) {
    return (
      <div className={styles.profile}>
        <h1 className={styles.title}>Profile</h1>
        <p className={styles.subtitle}>Hello {user.name}!</p>
        <p className={styles.subtitle}>Email: {user.email}</p>
        <p className={styles.subtitle}>Your Id: {user._id}</p>
        <p className={styles.subtitle}>
          Is Activated: {user.isActivated ? 'Account is active' : 'Account not activated'}
        </p>

        <button className={styles.button} onClick={handleLogOut}>
          LogOut
        </button>
      </div>
    )
  }

  return <LoaderLine />
}
