import styles from 'components/AboutProductPage/PayPanel/CounterPrice/CounterPrice.module.scss'

export default function CounterPrice() {
  return (
    <div className={styles.priceWrapper}>
      <p className={styles.priceText}>
        On Sale from <span className={styles.priceTextMark}>$3,299.00</span>
      </p>
    </div>
  )
}
