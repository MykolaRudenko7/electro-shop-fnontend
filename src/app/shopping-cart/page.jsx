'use client'

import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import { shoppingCartData } from 'data/shopping-cart'
import NavigationLink from 'components/shared/NavigationLink'
import OrderSummary from 'components/ShoppingCartPage/OrderSummary'
import ShoppingCartProductItem from 'components/ShoppingCartPage/ShoppingCartProductItem'
import CartButtonsBlock from 'components/ShoppingCartPage/ShoppingCartProductItem/CartButtonsBlock'
import styles from 'app/shopping-cart/ShoppingCart.module.scss'

const ShoppingCart = observer(() => {
  const { productsInCart } = productsStore
  const areProductsInCart = productsStore.productsInCart.length > 0

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.shoppingCartWrapper}>
        <ul className={styles.shoppingCartLinks}>
          {shoppingCartData.navigationLinks.map((link) => (
            <NavigationLink {...link} key={uuidv4()} />
          ))}
        </ul>
        <h3 className={styles.shoppingCartTitle}>Shopping Cart</h3>
        <section className={styles.shoppingCartBlocsWrapper}>
          <div className={styles.shoppingCartItems}>
            {areProductsInCart ? (
              <div className={styles.shoppingCartCategories}>
                {shoppingCartData.productsCategories.map((category) => (
                  <p className={styles.shoppingCartItem} key={uuidv4()}>
                    {category}
                  </p>
                ))}
              </div>
            ) : (
              <p className={styles.emptyCartMessage}>Cart Is Empty 😐</p>
            )}
            {productsInCart.map((product) => (
              <ShoppingCartProductItem {...product} key={uuidv4()} />
            ))}
            <CartButtonsBlock />
          </div>
          <OrderSummary />
        </section>
      </div>
    </div>
  )
})

export default ShoppingCart
