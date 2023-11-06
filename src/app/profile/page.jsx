import { getServerSession } from 'next-auth'
import { authOptions } from 'lib/authOptions'
import LogOutButton from 'components/ProfilePage/LogOutButton'
import styles from 'app/profile/Profile.module.scss'

export default async function Profile() {
  const session = await getServerSession(authOptions)
  const userName = session?.user.name
  const userEmail = session?.user.email

  return (
    <div className={styles.myAccount}>
      <h3 className={styles.title}>
        Hello, <span className={styles.mark}>{userName}!</span>
      </h3>
      <p className={styles.email}>
        Your Email Is: <span className={styles.mark}>{userEmail}</span>
      </p>
      <LogOutButton />
    </div>
  )
}
