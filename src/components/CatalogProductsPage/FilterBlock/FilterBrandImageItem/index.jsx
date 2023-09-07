import Image from 'next/image'
import Link from 'next/link'
import styles from 'components/CatalogProductsPage/FilterBlock/FilterBrandImageItem/FilterBrandImageItem.module.scss'

export default function FilterBrandImageItem({ alt, imageSrc, href }) {
  return (
    <Link href={href} about={alt} className={styles.imageWrapper}>
      <Image className={styles.image} alt={alt} src={imageSrc} />
    </Link>
  )
}
