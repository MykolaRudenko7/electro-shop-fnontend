'use client'

import { signOut } from 'next-auth/react'
import styles from 'components/ProfilePage/LogOutButton/LogOutButton.module.scss'

export default function LogOutButton() {
  return (
    <button
      aria-label="log out"
      className={styles.logOutButton}
      onClick={() => signOut()}
      tabIndex="0"
      type="button"
    >
      Log Out
    </button>
  )
}
