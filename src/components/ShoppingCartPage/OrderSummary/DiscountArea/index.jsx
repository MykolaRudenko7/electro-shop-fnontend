'use client'

import { useState } from 'react'
import styles from 'components/ShoppingCartPage/OrderSummary/DiscountArea/DiscountArea.module.scss'

export default function DiscountArea() {
  const [discountCode, setDiscountCode] = useState('')

  return (
    <form className={styles.discountArea}>
      <div className={styles.block}>
        <label className={styles.title} htmlFor="discount code">
          Enter Discount Code
        </label>
        <input
          className={styles.input}
          id="discount code"
          name="discount code"
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Enter Discount code"
          type="text"
          value={discountCode}
        />
      </div>
      <button aria-label="apply discount" className={styles.applyDiscountButton} type="button">
        Apply Discount
      </button>
    </form>
  )
}
