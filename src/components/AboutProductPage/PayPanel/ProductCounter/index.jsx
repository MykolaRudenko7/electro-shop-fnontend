import { useState } from 'react'
import Image from 'next/image'
import bottomPictureButton from 'images/AboutPage/PayPanel/bottom.svg'
import topPictureButton from 'images/AboutPage/PayPanel/top.svg'
import styles from 'components/AboutProductPage/PayPanel/ProductCounter/ProductCounter.module.scss'

export default function ProductCounter() {
  const [productCount, setProductCount] = useState(1)
  const incrementProductCount = () => {
    setProductCount(productCount + 1)
  }
  const decrementProductCount = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1)
    }
  }

  return (
    <div className={styles.leftBlock}>
      <div className={styles.counter}>
        <div className={styles.count}>{productCount}</div>
        <div className={styles.controlButtons}>
          <button
            type="button"
            aria-label="increase product count"
            className={styles.controlButton}
            onClick={incrementProductCount}
          >
            <Image src={topPictureButton} alt="increase product count picture" />
          </button>
          <button
            type="button"
            aria-label="subtract product count"
            className={styles.controlButton}
            onClick={decrementProductCount}
          >
            <Image src={bottomPictureButton} alt="subtract product count picture" />
          </button>
        </div>
      </div>
    </div>
  )
}
