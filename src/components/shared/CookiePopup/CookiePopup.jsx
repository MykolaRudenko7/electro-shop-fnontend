'use client'

import CookieConsent from 'react-cookie-consent'
import styles from 'components/shared/CookiePopup/CookiePopup.module.scss'

export default function CookiePopup() {
  return (
    <>
      <CookieConsent
        buttonClasses={styles.button}
        buttonText="OK"
        buttonWrapperClasses={styles.buttonWrapper}
        containerClasses={styles.container}
        contentClasses={styles.content}
        cookieName="cookieConsent"
        expires={150}
        location="bottom"
        disableButtonStyles
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  )
}
