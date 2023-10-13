import Link from 'next/link'
import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import ProductCounter from 'components/shared/ProductCounter'
import deleteButton from 'images/ShoppingCart/deleteButton.svg'
import editButton from 'images/ShoppingCart/editButton.svg'
import styles from 'components/ShoppingCartPage/ShoppingCartProductItem/ShoppingCartProductItem.module.scss'

const ShoppingCartProductItem = observer(({ url, name, price, slug }) => {
  const { productsSums, productsQuantities } = productsStore
  const productSubtotalPrice = productsSums[slug]
  const productQuantity = productsQuantities[slug]

  return (
    <div className={styles.shoppingCartProductItem}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <div className={styles.productImageWrapper}>
            <Image
              alt="product image"
              className={styles.productImage}
              height={120}
              src={url}
              width={120}
            />
          </div>
          <Link className={styles.aboutText} href="#">
            {name}
          </Link>
        </div>
        <div className={styles.amount}>
          <p className={styles.price}>${price}</p>
          <ProductCounter name={name} price={price} productQuantity={productQuantity} slug={slug} />
          <p className={styles.subtotalPrice}>${productSubtotalPrice}</p>
          <div className={styles.editingButtons}>
            <button
              aria-label="delete product"
              className={styles.editButton}
              onClick={() => productsStore.removeProductFromCart(slug)}
              type="button"
            >
              <Image alt="delete product" height={27} src={deleteButton} width={27} />
            </button>
            <button aria-label="edit product" className={styles.editButton} type="button">
              <Image alt="edit product" height={27} src={editButton} width={27} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})
export default ShoppingCartProductItem
