'use client'

import { useState } from 'react'
import cn from 'classnames'
import { textBlockData } from 'data/product-catalog/textBlockData'
import styles from 'components/CatalogProductsPage/TextBlockAboutCompany/TextBlockAboutCompany.module.scss'

export default function TextBlockAboutCompany() {
  const [isMoreTextVisible, setIsMoreTextVisible] = useState(false)
  const toggleTextVisibility = () => setIsMoreTextVisible(!isMoreTextVisible)
  const { text } = textBlockData

  return (
    <div className={styles.textBlock}>
      <p className={cn(styles.text, { [styles.moreTextVisible]: isMoreTextVisible })}>{text}</p>
      <button
        aria-label="test display control"
        className={styles.showMoreButton}
        onClick={toggleTextVisibility}
        type="button"
      >
        {isMoreTextVisible ? 'Hide' : 'More'}
      </button>
    </div>
  )
}
