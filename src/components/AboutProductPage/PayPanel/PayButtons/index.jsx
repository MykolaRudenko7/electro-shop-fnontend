import Image from 'next/image'
import buttonPicture from 'images/AboutPage/main/PayPanel/payPal.svg'
import styles from 'components/AboutProductPage/PayPanel/PayButtons/PayButtons.module.scss'

export default function PayButtons() {
  return (
    <div className={styles.payButtons}>
      <button type="button" aria-label="Add to Cart" className={styles.buttonAdd}>
        Add to Cart
      </button>
      <button type="button" aria-label="Pay with PayPal" className={styles.buttonPayPal}>
        <Image src={buttonPicture} alt="PayPal logo picture" width={72} height={18} />
      </button>
    </div>
  )
}
