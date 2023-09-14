import Image from 'next/image'
import { Rating } from 'primereact/rating'
import filledIcon from 'images/CatalogPage/cardsBlock/FullStar.svg'
import emptyIcon from 'images/CatalogPage/cardsBlock/EmptyStar.svg'
import styles from 'components/shared/ProductCardGridItem/StarRating/StarRating.module.scss'

export default function StarRating({ value }) {
  return (
    <div className={styles.ratingBlock}>
      <Rating
        cancel={false}
        offIcon={<Image alt="custom-image" height="13px" src={emptyIcon} width="13px" />}
        onIcon={<Image alt="custom-image-active" height="13px" src={filledIcon} width="13px" />}
        value={value}
        readOnly
      />
    </div>
  )
}
