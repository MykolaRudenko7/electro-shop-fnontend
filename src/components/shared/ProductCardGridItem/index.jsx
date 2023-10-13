import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import StarRating from 'components/shared/ProductCardGridItem/StarRating'
import basketImage from 'images/CatalogPage/cardsBlock/basket.svg'
import styles from 'components/shared/ProductCardGridItem/ProductCardGridItem.module.scss'

const ProductCardGridItem = observer((product) => {
  const { inStock, slug, url, name, reviewsCount, previousPrice, rating, price } = product

  const isProductInWishlist = productsStore.productsWishList.includes(name)
  const isProductInRatingList = productsStore.productsRatingList.includes(name)
  const { productsQuantities } = productsStore
  const productQuantity = productsQuantities[slug]

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.additionalAppearPanel}>
          <button
            aria-label="add to wish list"
            className={cn(styles.additionalAppearPanelLikeButton, {
              [styles.activeButton]: isProductInWishlist,
            })}
            onClick={() => productsStore.toggleProductInWishList(name)}
            type="button"
          />
          <button
            aria-label="add to rating list"
            className={cn(styles.additionalAppearPanelRatingButton, {
              [styles.activeButton]: isProductInRatingList,
            })}
            onClick={() => productsStore.toggleProductInRatingList(name)}
            type="button"
          />
        </div>
        <p className={cn(styles.inStock, { [styles.inStockTrue]: inStock })}>
          {inStock ? 'in stock' : 'check availability'}
        </p>
        <Link className={styles.cardImageWrapper} href="#">
          <Image
            alt="product image"
            className={styles.cardImage}
            height={150}
            src={url}
            width={150}
          />
        </Link>
        <div className={styles.ratingReviewsBlock}>
          <StarRating value={rating} />
          <Link about="open product page" className={styles.reviews} href="#">
            Reviews ({reviewsCount})
          </Link>
        </div>
        <Link about="open product page" className={styles.name} href="#">
          {name}
        </Link>
        <div className={styles.prices}>
          <p className={styles.previousPrice}>$ {previousPrice}</p>
          <p className={styles.price}>$ {price}</p>
        </div>
        <button
          aria-label="add to basket"
          className={styles.addToBasketButton}
          onClick={() => productsStore.addProductToCart(product)}
          type="button"
        >
          <Image
            alt="basket image"
            className={styles.addToBasketButtonImage}
            height={16}
            src={basketImage}
            width={18}
          />
          Add To Cart{' '}
          {productQuantity > 0 && <span className={styles.countOfProduct}>{productQuantity}</span>}
        </button>
      </div>
    </div>
  )
})

export default ProductCardGridItem
