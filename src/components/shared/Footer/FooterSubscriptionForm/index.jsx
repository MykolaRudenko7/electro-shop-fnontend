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
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="Your Email"
          type="email"
          value={emailValue}
          required
        />
      </label>
      <button
        area-label="subscribe to the newsletter button"
        className={styles.buttonSubscribe}
        type="submit"
      >
        Subscribe
      </button>
    </form>
  )
}
