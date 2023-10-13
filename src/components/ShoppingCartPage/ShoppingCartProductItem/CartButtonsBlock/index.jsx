import Link from 'next/link'
import productsStore from 'stores/productsStore'
import styles from 'components/ShoppingCartPage/ShoppingCartProductItem/CartButtonsBlock/CartButtonsBlock.module.scss'
import { observer } from 'mobx-react-lite'

const CartButtonsBlock = observer(() => {
  const { productsInCart } = productsStore

  return (
    <div className={styles.buttonsBlock}>
      <div className={styles.wrapper}>
        <Link
          aria-label="continue shopping"
          className={styles.continueButton}
          href="/products-catalog"
          role="button"
          type="button"
        >
          Continue Shopping
        </Link>
        <button
          aria-label="clear shopping cart"
          className={styles.clearButton}
          disabled={productsInCart.length === 0}
          onClick={() => productsStore.clearCart()}
          type="button"
        >
          Clear Shopping Cart
        </button>
      </div>
      <button aria-label="update shopping cart" className={styles.updateButton} type="button">
        Update Shopping Cart
      </button>
    </div>
  )
})

export default CartButtonsBlock
