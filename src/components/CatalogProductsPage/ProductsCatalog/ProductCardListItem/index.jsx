import Link from 'next/link'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import StarRating from 'components/shared/ProductCardGridItem/StarRating'
import styles from 'components/CatalogProductsPage/ProductsCatalog/ProductCardListItem/ProductCardListItem.module.scss'

const ProductCardListItem = observer(
  ({ inStock, slug, url, name, reviewsCount, previousPrice, rating, price }) => {
    const isProductInWishlist = productsStore.productsWishList.includes(name)
    const isProductInRatingList = productsStore.productsRatingList.includes(name)

    return (
      <div className={styles.card}>
        <div className={styles.cardWrapper}>
          <div className={styles.productImageRatingBlock}>
            <Link className={styles.productImageWrapper} href="#">
              <img alt="product image" className={styles.productImage} src={url} />
            </Link>
            <div className={styles.ratingReviews}>
              <StarRating value={rating} />
              <Link about="open product page" className={styles.reviews} href="#">
                Reviews ({reviewsCount})
              </Link>
            </div>
          </div>
          <div className={styles.descriptionBlock}>
            <p className={styles.slug}>{slug}</p>
            <Link className={styles.description} href="#">
              {name}
            </Link>
            <div className={styles.prices}>
              <p className={styles.previousPrice}>${previousPrice}</p>
              <p className={styles.price}>${price}</p>
            </div>
            <button aria-label="add to basket" className={styles.addToBasketButton} type="button">
              Add To Cart
            </button>
          </div>
          <div className={styles.productCharacteristics}>
            <div className={styles.productCharacteristicsCategory}>
              <p className={styles.productCharacteristicsCategoryName}>CPU</p>
              <p className={styles.productAvailability}>N/A</p>
            </div>
            <div className={styles.productCharacteristicsCategory}>
              <p className={styles.productCharacteristicsCategoryName}>Featured</p>
              <p className={styles.productAvailability}>N/A</p>
            </div>
            <div className={styles.productCharacteristicsCategory}>
              <p className={styles.productCharacteristicsCategoryName}>I/O Ports</p>
              <p className={styles.productAvailability}>N/A</p>
            </div>
          </div>
          <p className={cn(styles.inStock, { [styles.inStockTrue]: inStock })}>
            {inStock ? 'in stock' : 'check availability'}
          </p>
          <div className={styles.interactionWithProductBlock}>
            <button
              aria-label="add to wish list"
              className={cn(styles.addToWishlistButton, {
                [styles.activeButton]: isProductInWishlist,
              })}
              onClick={() => productsStore.toggleProductInWishList(name)}
              type="button"
            />
            <button
              aria-label="add to rating list"
              className={cn(styles.addToComparisonListButton, {
                [styles.activeButton]: isProductInRatingList,
              })}
              onClick={() => productsStore.toggleProductInRatingList(name)}
              type="button"
            />
            <button aria-label="write a message" className={styles.addReviewButton} type="button" />
          </div>
        </div>
      </div>
    )
  },
)

export default ProductCardListItem
