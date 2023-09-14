import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import StarRating from 'components/shared/ProductCardGridItem/StarRating'
import basketImage from 'images/CatalogPage/cardsBlock/basket.svg'
import styles from 'components/shared/ProductCardGridItem/ProductCardGridItem.module.scss'

export default function ProductCardGridItem({
  inStock,
  url,
  name,
  reviewsCount,
  previousPrice,
  rating,
  price,
}) {
  return (
    <div className={styles.card} href="#">
      <div className={styles.cardWrapper}>
        <div className={styles.additionalAppearPanel}>
          <button
            aria-label="add to wish list"
            className={styles.additionalAppearPanelLikeButton}
            type="button"
          />
          <button
            alaria-label="add to rating list"
            className={styles.additionalAppearPanelRatingButton}
            type="button"
          />
        </div>
        <p className={cn(styles.inStock, { [styles.inStockTrue]: inStock })}>
          {inStock ? 'in stock' : 'check availability'}
        </p>
        <Link className={styles.cardImageWrapper} href="#">
          <img alt="product image" className={styles.cardImage} src={url} />
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
        <button aria-label="add to basket" className={styles.addToBasketButton} type="button">
          <Image
            alt="basket image"
            className={styles.addToBasketButtonImage}
            height={16}
            src={basketImage}
            width={18}
          />
          Add To Cart
        </button>
      </div>
    </div>
  )
}
