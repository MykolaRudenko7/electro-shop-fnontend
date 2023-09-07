import Image from 'next/image'
import buttonPicture from 'images/AboutPage/PayPanel/payPal.svg'
import styles from 'components/AboutProductPage/PayPanel/PayButtons/PayButtons.module.scss'

export default function PayButtons() {
  return (
    <div className={styles.payButtons}>
      <button className={styles.buttonAddToCart} type="button" area-label="add to cart">
        Add to Cart
      </button>
      <button className={styles.buttonPayPal} type="button" aria-label="pay with payPal">
        <Image src={buttonPicture} alt="payPal logo picture" width={72} height={18} />
      </button>
    </div>
  )
}
