import Link from 'next/link'
import Image from 'next/image'
import SummaryAccordions from 'components/ShoppingCartPage/OrderSummary/SummaryAccordions'
import payPalPicture from 'images/ShoppingCart/payPal.svg'
import serviceImage from 'images/ShoppingCart/servicesImage.svg'
import styles from 'components/ShoppingCartPage/OrderSummary/OrderSummary.module.scss'

export default function OrderSummary() {
  return (
    <div className={styles.paymentForm}>
      <div className={styles.paymentFormWrapper}>
        <h4 className={styles.title}>Summary</h4>
        <SummaryAccordions />
        <ul className={styles.priceList}>
          <li className={styles.price}>
            Subtotal <span className={styles.count}>${}</span>
          </li>
          <li className={styles.price}>
            Shipping <span className={styles.count}>${}</span>
          </li>
          <p className={styles.clarification}>
            (Standard Rate - Price may vary depending on the item/destination. TECS Staff will
            contact you.)
          </p>
          <li className={styles.price}>
            Tax <span className={styles.count}>${}</span>
          </li>
          <li className={styles.price}>
            GST <span className={styles.count}>${}</span>
          </li>
          <li className={styles.price}>
            Order Total <span className={styles.count}>${}</span>
          </li>
        </ul>
        <div className={styles.payButtons}>
          <button aria-label="proceed to checkout" className={styles.proceed} type="button">
            Proceed to Checkout
          </button>
          <button
            aria-label="check out with PayPal"
            className={styles.checkOutWithPayPal}
            type="button"
          >
            Check out with{' '}
            <Image alt="pay pal picture" height={18} src={payPalPicture} width={72} />
          </button>
          <button
            aria-label="Check out with multiple addresses"
            className={styles.checkOutWithMultiple}
            type="button"
          >
            Check Out with Multiple Addresses
          </button>
        </div>
        <div className={styles.service}>
          <Image alt="service picture" className={styles.serviceImage} src={serviceImage} />
          <p className={styles.serviceText}>
            own it now, up to 6 months interest free{' '}
            <Link about="learn more" className={styles.serviceLink} href="#" target="_blank">
              learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
