'use client'

import { useState } from 'react'
import styles from 'components/shared/Footer/FooterSubscriptionForm/FooterSubscriptionForm.module.scss'

export default function FooterSubscriptionForm() {
  const [emailValue, setEmailValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">
        <input
          className={styles.input}
          placeholder="Your Email"
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          required
        />
      </label>
      <button
        className={styles.buttonSubscribe}
        type="submit"
        area-label="subscribe to the newsletter button"
      >
        Subscribe
      </button>
    </form>
  )
}
