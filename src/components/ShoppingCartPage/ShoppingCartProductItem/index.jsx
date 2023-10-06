'use client'

import Link from 'next/link'
import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import ProductCounter from 'components/AboutProductPage/PayPanel/ProductCounter'
import deleteButton from 'images/ShoppingCart/deleteButton.svg'
import editButton from 'images/ShoppingCart/editButton.svg'
import styles from 'components/ShoppingCartPage/ShoppingCartProductItem/ShoppingCartProductItem.module.scss'

const ShoppingCartProductItem = observer(({ image, name, price, subtotalPrice }) => (
  <div className={styles.shoppingCartProductItem}>
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <div className={styles.productImageWrapper}>
          <Image
            alt="product image"
            className={styles.productImage}
            height={120}
            src={image}
            width={120}
          />
        </div>
        <Link className={styles.aboutText} href="#">
          {name}
        </Link>
      </div>
      <div className={styles.amount}>
        <p className={styles.price}>{price}</p>
        <ProductCounter />
        <p className={styles.subtotalPrice}>{subtotalPrice}</p>
        <div className={styles.editingButtons}>
          <button aria-label="delete product" className={styles.editButton} type="button">
            <Image alt="delete product" height={27} src={deleteButton} width={27} />
          </button>
          <button aria-label="edit product" className={styles.editButton} type="button">
            <Image alt="edit product" height={27} src={editButton} width={27} />
          </button>
        </div>
      </div>
    </div>
  </div>
))

export default ShoppingCartProductItem
