'use client'

import AuthorizationModal from 'components/shared/AuthorizationModal'
import styles from 'components/LoginPage/RegistrationInfo/RegistrationInfo.module.scss'

export default function RegistrationInfo() {
  return (
    <div className={styles.newCustomerBlock}>
      <h3 className={styles.title}>New Customer?</h3>
      <ul className={styles.creatingList}>
        Creating an account has many benefits:
        <li className={styles.creatingListItem}>Check out faster</li>
        <li className={styles.creatingListItem}>Keep more than one address</li>
        <li className={styles.creatingListItem}>Track orders and more</li>
      </ul>
      <AuthorizationModal />
    </div>
  )
}
