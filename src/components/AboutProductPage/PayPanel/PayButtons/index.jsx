import Image from 'next/image'
import buttonPicture from 'images/AboutPage/PayPanel/payPal.svg'
import styles from 'components/AboutProductPage/PayPanel/PayButtons/PayButtons.module.scss'

export default function PayButtons() {
  return (
    <div className={styles.payButtons}>
      <button area-label="add to cart" className={styles.buttonAddToCart} type="button">
        Add to Cart
      </button>
      <button aria-label="pay with payPal" className={styles.buttonPayPal} type="button">
        <Image alt="payPal logo picture" height={18} src={buttonPicture} width={72} />
      </button>
    </div>
  )
}
