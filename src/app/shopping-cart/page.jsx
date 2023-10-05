import { v4 as uuidv4 } from 'uuid'
import NavigationLink from 'components/shared/NavigationLink'
import ShoppingCartProductItem from 'components/ShoppingCartPage/ShoppingCartProductItem'
import { shoppingCartData } from 'data/shopping-cart'
import styles from 'app/shopping-cart/ShoppingCart.module.scss'

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart. Tech online store',
}

export default function ShoppingCart() {
  const { products, productsCategories } = shoppingCartData

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
            {products ? (
              <div className={styles.shoppingCartCategories}>
                {productsCategories.map((category) => (
                  <p className={styles.shoppingCartItem} key={uuidv4()}>
                    {category}
                  </p>
                ))}
              </div>
            ) : (
              <div>Empty</div>
            )}
            {products?.map((product) => (
              <ShoppingCartProductItem {...product} key={uuidv4()} />
            ))}
          </div>
          <div className={styles.shoppingCartPayPanel} />
        </section>
      </div>
    </div>
  )
}
