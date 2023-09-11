import { useState } from 'react'
import Image from 'next/image'
import topPictureButton from 'images/AboutPage/PayPanel/top.svg'
import bottomPictureButton from 'images/AboutPage/PayPanel/bottom.svg'
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
            aria-label="increase product count"
            className={styles.controlButton}
            onClick={incrementProductCount}
            type="button"
          >
            <Image alt="increase product count picture" src={topPictureButton} />
          </button>
          <button
            aria-label="subtract product count"
            className={styles.controlButton}
            onClick={decrementProductCount}
            type="button"
          >
            <Image alt="subtract product count picture" src={bottomPictureButton} />
          </button>
        </div>
      </div>
    </div>
  )
}
