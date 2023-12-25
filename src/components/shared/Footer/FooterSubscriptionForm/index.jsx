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
      <div className={styles.inputContainer}>
        <label htmlFor="email" />
        <input
          autoComplete="email"
          className={styles.input}
          id="email"
          name="email input"
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="Your Email"
          type="email"
          value={emailValue}
          required
        />
      </div>
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
