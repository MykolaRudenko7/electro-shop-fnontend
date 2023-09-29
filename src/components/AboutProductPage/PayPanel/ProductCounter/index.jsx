import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import topPictureButton from 'images/AboutPage/PayPanel/top.svg'
import bottomPictureButton from 'images/AboutPage/PayPanel/bottom.svg'
import styles from 'components/AboutProductPage/PayPanel/ProductCounter/ProductCounter.module.scss'

const ProductCounter = observer(() => {
  const { productsQuantity } = productsStore

  return (
    <div className={styles.leftBlock}>
      <div className={styles.counter}>
        <div className={styles.count}>{productsQuantity}</div>
        <div className={styles.controlButtons}>
          <button
            aria-label="increase product count"
            className={styles.controlButton}
            onClick={() => productsStore.increaseProductQuantity()}
            type="button"
          >
            <Image
              alt="increase product count picture"
              className={styles.controlButtonIcon}
              src={topPictureButton}
            />
          </button>
          <button
            aria-label="subtract product count"
            className={styles.controlButton}
            onClick={() => productsStore.subtractProductQuantity()}
            type="button"
          >
            <Image
              alt="subtract product count picture"
              className={styles.controlButtonIcon}
              src={bottomPictureButton}
            />
          </button>
        </div>
      </div>
    </div>
  )
})

export default ProductCounter
