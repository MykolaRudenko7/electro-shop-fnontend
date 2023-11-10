import Link from 'next/link'
import styles from 'components/LoginPage/LoginSection/UserAlreadyLoggedInMessage/UserAlreadyLoggedInMessage.module.scss'

export default function UserAlreadyLoggedInMessage() {
  return (
    <div className={styles.loggedMessage}>
      <p className={styles.title}>You are already logged in 👀.</p>
      <p className={styles.text}>
        if you want to log out, please do so via your {''}
        <Link about="profile page" className={styles.profileLink} href="/profile">
          profile page
        </Link>
      </p>
    </div>
  )
}
