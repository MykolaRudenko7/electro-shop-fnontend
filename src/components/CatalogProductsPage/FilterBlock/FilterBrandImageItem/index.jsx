import Image from 'next/image'
import Link from 'next/link'
import styles from 'components/CatalogProductsPage/FilterBlock/FilterBrandImageItem/FilterBrandImageItem.module.scss'

export default function FilterBrandImageItem({ alt, imageSrc, href }) {
  return (
    <Link about={alt} className={styles.imageWrapper} href={href}>
      <Image alt={alt} className={styles.image} src={imageSrc} />
    </Link>
  )
}
