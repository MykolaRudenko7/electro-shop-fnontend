import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import topPictureButton from 'images/AboutPage/PayPanel/top.svg'
import bottomPictureButton from 'images/AboutPage/PayPanel/bottom.svg'
import styles from 'components/shared/ProductCounter/ProductCounter.module.scss'

const ProductCounter = observer(({ productQuantity, price, slug }) => (
  <div className={styles.leftBlock}>
    <div className={styles.counter}>
      <div className={styles.quantity}>{productQuantity}</div>
      <div className={styles.controlButtons}>
        <button
          aria-label="increase product quantity"
          className={styles.controlButton}
          onClick={() => productsStore.incrementProductQuantity(slug, price)}
          type="button"
        >
          <Image
            alt="increase product quantity"
            className={styles.controlButtonIcon}
            src={topPictureButton}
          />
        </button>
        <button
          aria-label="subtract product quantity"
          className={styles.controlButton}
          onClick={() => productsStore.decrementProductQuantity(slug, price)}
          type="button"
        >
          <Image
            alt="subtract product quantity"
            className={styles.controlButtonIcon}
            src={bottomPictureButton}
          />
        </button>
      </div>
    </div>
  </div>
))

export default ProductCounter
